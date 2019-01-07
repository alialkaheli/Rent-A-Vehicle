import React from 'react';
import { Link } from "react-router-dom";

class PostBox extends React.Component {

    render() {
        console.log(this.props.index)
        return <div>
            <h2>{this.props.postData.type}</h2>
            <h4>{this.props.postData.description}</h4>
            <h3>{this.props.postData.price}</h3>
            <h3>{this.props.postData.pickup}</h3>
            <h3>{this.props.postData.startdate}</h3>
            <h3>{this.props.postData.enddate}</h3>
            <Link to={`/posts/${this.props.index}`}>
              Update
            </Link>
          </div>;
    }
}

export default PostBox;