import '../css/ArticleCard.css'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/api';
import { Votes } from './Votes'

export const ArticleCard = (props) => {
    return (
            <>
                {props.articles.map((article) => {
                    return (
                        <div key={article.article_id} className='article-card'>
                           <Link className='article-card__title' to={`/articles/${article.article_id}`} style={{ textDecoration: 'none' }}><h3 className='article-title' >{article.title}</h3></Link>
                            <p className='article-card__topic'>{article.topic}</p>
                            <p className='article-card__datetime'>{formatDate(article.created_at)}</p>
                            <p className='article-card__commentcount'>Comments {article.comment_count}</p>
                            <Votes className='article-card__votes' article_id={article.article_id} votes={article.votes}/>
                        </div>
                    )
                })}
            </>
    );
};