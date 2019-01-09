import React from 'react';
import PostBox from '../posts/post_box';
import { Link } from "react-router-dom";
import "../../css_styling/post.scss";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        console.log(this.props.currentUser.id);
        this.props.fetchUserPosts(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ posts: newState.posts });
    }

    render() {
        if (this.state.posts.length === 0) {
            return (<div>This user has no Posts</div>)
        } else {
            return <div className="user-form">
                <h2>All of This User's Posts</h2>
                    <div className="user-post-form" >
                {this.state.posts.map((post,idx) => (
                    
                        <div className="user-post">
                            <div className="veh-spec">
                            <PostBox
                                index={idx}
                                postData={post}
                            />
                            </div>
                            <div className="buttons">
                            <button className="delete-button" onClick={() => this.props.delPost(post._id)}>Delete</button>
                            <Link className="update-link" to={`/posts/${post._id}`}>Update</Link>
                            </div>
                        </div>
                    
                ))}
                </div>
              </div>;
        }
    }
}

export default Profile;