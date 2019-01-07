import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import PostsMap from '../posts_map/posts_map'; 
import Posts from '../posts/posts';

//deconstruct props
const Search = ({posts, fetchPosts}) => (
    <div>
        <Posts posts={posts} fetchPosts={fetchPosts}/>
        <PostsMap />
    </div>
)

export default withRouter(Search);