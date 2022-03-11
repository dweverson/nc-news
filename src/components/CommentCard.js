import '../css/CommentCard.css'
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
    <form onSubmit={handleSubmit} className='form'>
    <div className='form__commentbox'>
        <label>
            <textarea
                className='form__textarea'
                value={commentInput}
                id='comment input'
                placeholder='Have your say...'
                type='text'
                required
                onChange={(e) => setCommentInput(e.target.value)}>
            </textarea>
        </label>
        </div>
        <div className='form__submit'>
        <button className='btn form__button' type='submit'>Post Comment</button>
        </div>
    </form>
            <ul> 
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className='comment'>
                            <div className='comment__delete'>
                        {loggedInUser.username === comment.author ? <button  className='btn' onClick={() => handleClick(comment.comment_id)}>Delete</button> : null  }
                        </div>
                            <h3 className='comment__author'>u/ {comment.author}</h3>
                            <p className='comment__datetime'>{formatDate(comment.created_at)}</p>
                            <p className='comment__votes'>{comment.votes} votes</p>
                            <p className='comment__body'>{comment.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};