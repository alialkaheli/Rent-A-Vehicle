import {
  RECEIVE_POSTS,
  RECEIVE_USER_POSTS,
  RECEIVE_NEW_POST,
  REMOVE_POST,
    RECEIVE_POST
} from "../actions/post_actions";

const PostsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_POSTS:
            
            // const betterFormat = {};
            // action.posts.data.forEach(obj => betterFormat[obj._id] = obj);
            newState.all = action.posts.data;
            // newState.all = betterFormat;
            return newState;
        case RECEIVE_USER_POSTS:
            newState.user = action.posts.data;
            
            return newState;
        case RECEIVE_POST:
            return Object.assign({}, state, {[action.post.data._id]: action.post.data});
        case RECEIVE_NEW_POST:
            newState.new = action.post.data;
            return newState;
        case REMOVE_POST:
            delete newState[action.posts.data.postId];
            // console.log(newState[action.post.postId.data]);
            return newState
        default:
            return state;
    }
};

export default PostsReducer;