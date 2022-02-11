import { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import { postComment } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from '../utils/api';
import { formatDate } from '../utils/api';


export const CommentCard = (props) => {
const { loggedInUser } = useContext(UserContext);
const [comments, setComments] = useState([]);
const [commentInput, setCommentInput] = useState('')
const [commentCount, setCommentCount] = useState('guitar')
const [commentLength, setCommentLength] = useState(0)

useEffect (() => {
    setCommentCount(props.commentCount)
    getComments(props.article_id).then((commentsFromApi) => {
        setComments(commentsFromApi)
        setCommentLength(commentsFromApi.length)
    })
}, [])

useEffect (() => {
    getComments(props.article_id).then((commentsFromApi) => {
        setComments(commentsFromApi)
        setCommentLength(commentsFromApi.length)
    })
}, [commentLength])


const handleSubmit = (event) => {
    event.preventDefault();
    setCommentLength((currCount) => currCount + 1)
    postComment(props.article_id, commentInput, loggedInUser.username)
    .catch((err) => { setCommentCount((currCount) => currCount - 1) })
    }

const handleClick = (comment_id) => {
    deleteComment(comment_id)
    setCommentLength((currCount) => currCount - 1)
}
    return (

<div>
    <p>Comment Count: {comments.length}</p>
    <p>Post a comment!</p>
    <form onSubmit={handleSubmit}>
        <label>
            Comment input
            <input
                value={commentInput}
                id='comment input'
                placeholder='comment input'
                type='text'
                required
                onChange={(e) => setCommentInput(e.target.value)}>

            </input>
        </label>
        <button className='btn' type='submit'>Submit</button>
    </form>
            <ul> 
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className='articleCard'>
                            <h3>By User: {comment.author}</h3>
                            <p>Created At: {formatDate(comment.created_at)}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>Body: {comment.body}</p>
                            {loggedInUser.username === comment.author ? <button className='btn' onClick={() => handleClick(comment.comment_id)}>Delete</button> : null  }
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};