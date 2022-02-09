import { Link } from 'react-router-dom'

export const ArticleCard = (props) => {
    return (
            <ul> 
                {props.articles.map((article) => {
                    return (
                        <li key={article.article_id} className='articleCard'>
                           <Link to={`/articles/${article.article_id}`}><h2>Title: {article.title}</h2></Link>
                            <h3>By User: {article.author}</h3>
                            <p>Topic: {article.topic}</p>
                            <p>Created At: {article.created_at}</p>
                            <p>Comment Count: {article.comment_count}</p>
                            <p>Votes: {article.votes}</p>
                        </li>
                    )
                })}
            </ul>
    );
};