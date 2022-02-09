import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import { useParams } from 'react-router-dom';

export const Articles = () => {

const [articles, setArticles] = useState([]);
const { topic } = useParams();

useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
        setArticles(articlesFromApi);
        })
}, [topic]);
    
return  (
        <div className='articles'>
            <ArticleCard articles={articles} />
        </div>
        )
}