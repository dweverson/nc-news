import { useEffect, useState } from 'react';
import { getComments } from '../utils/api';
import { postComment } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../contexts/User";


export const CommentCard = (props) => {

const { loggedInUser } = useContext(UserContext);
const [comments, setComments] = useState([]);
const [commentInput, setCommentInput] = useState('')

useEffect (() => {
    getComments(props.article_id).then((commentsFromApi) => {
        setComments(commentsFromApi)
    })
}, [])

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loggedInUser.username, 'LOGGED USER COMMENT CARD')
    console.log(commentInput, 'COMM INPUT')
    // const commentObj = {commentInput, loggedInUser}
    postComment(props.article_id, commentInput, loggedInUser.username)
}

    return (

<div>
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
        <button type='submit'>Submit</button>
    </form>
            <ul> 
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className='articleCard'>
                            <h3>By User: {comment.author}</h3>
                            <p>Created At: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>Body: {comment.body}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};