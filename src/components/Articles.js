import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useParams } from 'react-router-dom';

export const Articles = (props) => {
const [articles, setArticles] = useState([]);
const { topic } = useParams();

useEffect(() => {
    getArticles(topic, props.sortBy, props.sortAscDesc ).then((articlesFromApi) => {
        setArticles(articlesFromApi);
        })
}, [topic, props.sortBy, props.sortAscDesc]);
    
return  (
        <div className='articles'>
            <ArticleCard articles={articles} />
        </div>
        )
}