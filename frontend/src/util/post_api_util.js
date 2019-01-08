import axios from 'axios';

export const getPosts = () => {
    return axios.get('/api/posts');
};

export const getUserPosts = id => {
    return axios.get(`/api/posts/user/${id}`);
};

export const writePost = data => {
    return axios.post('/api/posts/', data);
};

export const getPost = id => {
    return axios.get(`api/posts/${id}`)
}

export const updatePost = data => {
    return axios.patch(`/api/posts/${data.id}`,
    data)
    ;
};
export const deletePost = dataid => {
    return axios.delete(`/${dataid}`);
};
