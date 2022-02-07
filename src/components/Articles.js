import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from "react"
import { getArticles } from "../utils/api";

export const Articles = () => {

const [articles, setArticles] = useState([]);

useEffect(() => {
    getArticles().then((articlesFromApi) => {
        setArticles(articlesFromApi);
        
    })

}, []);



    return (

<div className='articles'>
    <ArticleCard articles={articles} />
</div>

    )
}