import '../css/SingleArticle.css'
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
        <div className='article'>
            <h2 className='article__title'>{singleArticle.title}</h2>
            <h3 className='article__author'>u/{singleArticle.author}</h3>
            <p className='article__topic'>{singleArticle.topic}</p>
            <p className='article__datetime'>{formatDate(singleArticle.created_at)}</p>
            <p className='article__body'> {singleArticle.body}</p>
            <p className='article__commentcount'>{singleArticle.comment_count} comments</p>
            <Votes className='article__votes' article_id={article_id} votes={singleArticle.votes}/>
            </div>
        <div>
        <CommentCard article_id={article_id} commentCount={singleArticle.comment_count}/>
        </div>
    </div>
    )
}