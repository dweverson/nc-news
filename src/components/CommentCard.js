import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getComments } from '../utils/api';



export const CommentCard = (props) => {

const [comments, setComments] = useState([]);

useEffect (() => {
    getComments(props.article_id).then((commentsFromApi) => {
        setComments(commentsFromApi)
    })
}, [])

    return (
            <ul> 
                {comments.map((comment) => {
                    return (
                        <li key={comment.article_id} className='articleCard'>
                            <h3>By User: {comment.author}</h3>
                            <p>Created At: {comment.created_at}</p>
                            <p>Votes: {comment.votes}</p>
                            <p>Body: {comment.body}</p>
                        </li>
                    )
                })}
            </ul>
    );
};