import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getArticleById } from '../utils/api'
import { CommentCard } from "./CommentCard";
import { Votes } from './Votes'
import { formatDate } from "../utils/api";

export const SingleArt = () => {

const [singleArticle, setSingleArticle] = useState({});
const { article_id } = useParams()

useEffect (() => {
    getArticleById(article_id).then((articleFromApi) => {
        setSingleArticle(articleFromApi)
    })
}, [])
return (
    <div className='container'>
        <h2><strong>Title:</strong> {singleArticle.title}</h2>
        <h3><strong>By User:</strong>{singleArticle.author}</h3>
        <p><strong>Topic:</strong> {singleArticle.topic}</p>
        <p><strong>Created At:</strong> {formatDate(singleArticle.created_at)}</p>
        <p><strong>Article:</strong> {singleArticle.body}</p>
        <Votes article_id={article_id} votes={singleArticle.votes}/>
        <CommentCard article_id={article_id} commentCount={singleArticle.comment_count}/>
    </div>
    )
}