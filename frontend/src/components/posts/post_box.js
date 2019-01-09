import React from 'react';
// import { Link } from "react-router-dom";
import "../../css_styling/post.scss";

class PostBox extends React.Component {

    render() {
        // console.log(this.props.index)
        return <div className="post-info">
            <div className="top-post">
              <h3>{this.props.postData.type}</h3>
              <h3>{this.props.postData.price}</h3>
            </div>
            <div className="top-post">
              <h3>{this.props.postData.startdate}</h3>  
              <h3>{this.props.postData.enddate}</h3>
            </div>
            <h3>{this.props.postData.pickup}</h3>
            <h3>{this.props.postData.description}</h3>
            <img src={this.props.postData.photoFile}/>
            {/* <h3>{this.props.postData.photoFile}</h3> */}

            {/* <Link to={`/posts/${this.props.index}`}>Update</Link> */}
          </div>;
    }
}

export default PostBox;