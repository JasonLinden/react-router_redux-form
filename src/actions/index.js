import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=jasonawe';

// Adding redux thunk
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    // param will be the dispatch method used in redux
    // Cool article https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60
    return (dispatch) => {
        request
            .then(({ data }) => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: request
                })
            });
    };
}

export function createPost(values, callback) {
    const request = axios
        .post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios
        .get(`${ROOT_URL}/posts/${id + API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios
        .delete(`${ROOT_URL}/posts/${id + API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}