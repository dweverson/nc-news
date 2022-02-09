import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: 'https://dans-nc-news-project.herokuapp.com/api'
});

export const getArticles = (topic_slug) => {
    return ncNewsApi.get('/articles', { params: {topic: topic_slug}})
    .then(({ data }) => {
        console.log(topic_slug, 'API TOPIC')
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