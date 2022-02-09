import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getArticleById } from '../utils/api'


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
        <p>Votes: {singleArticle.votes}</p>
        <p>Body: {singleArticle.body}</p>
    </div>
    )
}