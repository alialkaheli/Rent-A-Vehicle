import React from 'react';
// import { Link } from "react-router-dom";
import "../../css_styling/post.scss";

class PostBox extends React.Component {

    render() {
        // console.log(this.props.index)
        return <div className="post-info">
          
          <div className="specs">
            <div className="top-post">
              <h3>Vehicle: {this.props.postData.type}</h3>
              <h3>Price: $ {this.props.postData.price}</h3>
            </div>
            <div className="top-post">
              <h3>Start: {this.props.postData.startdate} </h3>  
              <h3>End: {this.props.postData.enddate} </h3>
            </div>
            <h3>Pick up location: {this.props.postData.pickup}</h3>
            <h3>Description: {this.props.postData.description}</h3>
        </div>
          <div className="post-pic">
            <img src={this.props.postData.photoFile} className="veh-image" />
            {/* <h3>{this.props.postData.photoFile}</h3> */}

            {/* <Link to={`/posts/${this.props.index}`}>Update</Link> */}
          </div>
        
          </div>;
    }
}

export default PostBox;