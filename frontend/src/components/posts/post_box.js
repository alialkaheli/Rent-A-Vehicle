import React from 'react';
// import { Link } from "react-router-dom";
import "../../css_styling/post.scss";

class PostBox extends React.Component {
    format(date){
      const obj = date.split("-");
      // let yr = obj[0]

      // let day = obj[2]
      const monthName = { "01": "January", "02": "Febuary", "03": "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December" };
      console.log(obj)
      obj[1] = monthName[obj[1]].toString();
      let realtime = ""
      realtime += obj[1] + " "+ obj[2] +", "+ obj[0]
      return realtime
      

      
    }
    render() {
        // console.log(this.props.index)
        let start, end;
      if (this.props.postData.startdate && this.props.postData.enddate){
        start = this.format(this.props.postData.startdate);
        end = this.format(this.props.postData.enddate);
      }
        return <div className="post-info">
            <div className="specs">
              <h3 className="v-name">Vehicle: {this.props.postData.type}</h3>

              <div className="top-post">
                <h3 className="spec-sec">{start} -   </h3>
              <h3 className="spec-sec"> {end} </h3>
              </div>
            <h3 className="spec-sec">Price: ${this.props.postData.price}</h3>
            <h3 className="spec-sec">{this.props.postData.pickup}</h3>
            <h3 className="spec-sec">{this.props.postData.description}</h3>
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