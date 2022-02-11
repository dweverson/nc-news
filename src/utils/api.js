import axios from 'axios';
const dayjs = require('dayjs')

const ncNewsApi = axios.create({
    baseURL: 'https://dans-nc-news-project.herokuapp.com/api'
});

export const getArticles = (topic_slug, sortBy, sortAscDesc) => {
    return ncNewsApi.get('/articles', { params: {topic: topic_slug, sort_by: sortBy, order_by: sortAscDesc}})
    .then(({ data }) => {
        return data.articles
    });
};

export const getArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`)
    .then(({ data }) => {
        return data.article
    })
}

export const getTopics = () => {
    return ncNewsApi.get('/topics')
    .then(({ data }) => {
        return data.topics
    })
}

export const getComments = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
    return data.comments
    })
}

export const patchVotes = (article_id, inc_votes) => {
    return ncNewsApi.patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then (({ data }) => {
        return data.article
    })
}

export const postComment = (article_id, body, username) => {
    return ncNewsApi.post(`/articles/${article_id}/comments`, { username: username, body: body })
    .then (({ data }) => {
        return data.comment
    })
}

export const deleteComment = (comment_id) => {
    return ncNewsApi.delete(`/comments/${comment_id}`)
    .then ((res) => {
        console.log('comment deleted api yo')
        return 'comment deleted'
    }) 
}

export const formatDate = (input) => {
    if (input) {
      return dayjs(input).$d.toString().substring(4, 15);
    }
  };