import React from "react";
// import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import PostsMap from '../posts_map/posts_map'; 
import Posts from '../posts/posts';
import '../../css_styling/search.scss';

//deconstruct props
const Search = ({posts, fetchPosts}) => (
    <div className="search-containers">
        <div className="map"> <PostsMap posts={posts}/></div>
        <div className="post-section"><Posts posts={posts} fetchPosts={fetchPosts}/></div>
    </div>
)

export default withRouter(Search);