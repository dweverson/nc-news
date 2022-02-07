import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://dans-nc-news-project.herokuapp.com/api'
});

export const getArticles = () => {
    return ncNewsApi.get('/articles').then(({ data }) => {
        return data.articles
    });
};

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
        console.log(data, 'ART DATA API')
        return data.article
    })
}