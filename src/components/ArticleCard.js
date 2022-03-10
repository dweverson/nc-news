import { Link } from 'react-router-dom'
import { formatDate } from '../utils/api';

export const ArticleCard = (props) => {
    return (
            <ul> 
                {props.articles.map((article, index) => {
                    return (
                        
                        <li key={article.article_id} className='articleCard'>
                           <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}><h3>{article.title}</h3></Link>
                            <h4>{article.author}</h4>
                            <p>{article.topic}</p>
                            <p>{formatDate(article.created_at)}</p>
                            <p>Comments {article.comment_count}</p>
                            <p>Votes {article.votes}</p>
                        </li>
                        
                    )
                })}
            </ul>
    );
};