import { Link } from 'react-router-dom'
import { formatDate } from '../utils/api';

export const ArticleCard = (props) => {
    return (
            <ul> 
                {props.articles.map((article) => {
                    return (
                        
                        <li key={article.article_id} className='articleCard'>
                           <Link to={`/articles/${article.article_id}`}><h3>Title: {article.title}</h3></Link>
                            <h4>By User: {article.author}</h4>
                            <p>Topic: {article.topic}</p>
                            <p>Created At: {formatDate(article.created_at)}</p>
                            <p>Comment Count: {article.comment_count}</p>
                            <p>Votes: {article.votes}</p>
                        </li>
                        
                    )
                })}
            </ul>
    );
};