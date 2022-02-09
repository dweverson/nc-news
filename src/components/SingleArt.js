import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getArticleById } from '../utils/api'
import { CommentCard } from "./CommentCard";
import { Votes } from './Votes'

export const SingleArt = () => {

const [singleArticle, setSingleArticle] = useState({});
const { article_id } = useParams()

useEffect (() => {
    getArticleById(article_id).then((articleFromApi) => {
        setSingleArticle(articleFromApi)
    })
}, [])

return (
    <div className='singleArt'>
        <h2>Title: {singleArticle.title}</h2>
        <h3>By User: {singleArticle.author}</h3>
        <p>Topic: {singleArticle.topic}</p>
        <p>Created At: {singleArticle.created_at}</p>
        <p>Comment Count: {singleArticle.comment_count}</p>
        <p>Body: {singleArticle.body}</p>
        <Votes article_id={article_id} votes={singleArticle.votes}/>
        {/* <PostComment article_id={article_id} /> */}
        <CommentCard article_id={article_id} />
    </div>
    )
}