import axios from 'axios';

export const getPost = () => {
    return axios.get('/api/posts');
};

export const getUserPosts = id => {
    return axios.get(`/api/posts/user/${id}`);
};

export const writePost = data => {
    return axios.post('/api/posts/', data);
}