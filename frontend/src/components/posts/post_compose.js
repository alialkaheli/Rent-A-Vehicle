import React from 'react';
import PostBox from './post_box';
import axios from 'axios';
const cloudinaryUrl = require('../../front_config/cloudinary_keys').cloudinary_url;
const cloudinaryPreset = require('../../front_config/cloudinary_keys').cloudinary_upload_preset;


import "../../css_styling/creating-post.scss";

class PostCompose extends React.Component {
  constructor(props) {
      super(props);
      // debugger

      this.state = this.props.post;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
      this.fileUploadHandler = this.fileUploadHandler.bind(this);
      // this.onChange = this.onChange.bind(this);
  } 

  handleSubmit(e) {
    e.preventDefault();
      let post =
      {
          type: this.state.type,
          price: this.state.price,
          startdate: this.state.startdate,
          enddate: this.state.enddate,
          description: this.state.description,
          pickup: this.state.pickup,
          id: this.state._id

        //   newPost: "" 
      };

    // this.props.action(post);
   
    this.props.action(post).then(action => {
      this.props.history.push(`/posts`);
    }).catch(fail => {
      console.log(fail)
    });
  }

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

  fileSelectedHandler(e) {
      e.preventDefault();
      return e => this.setState({
        photoFile: e.target.files[0]
    });
  }

    fileUploadHandler(e) {
        e.preventDefault();
        // let file = e.currentTarget.value;
        let formData = new FormData();
        formData.append("image", this.state.photoFile);
        formData.append("upload_preset", cloudinaryPreset);
        

        axios({
            url: cloudinaryUrl,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: formData
        })
        .then( (data) => {this.handleSubmit(data)})
        .catch();
    }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

    // onChange(e) {
    //     const files = Array.from(e.target.files);
    //     this.setState({ uploading: true });

    //     const formData = new FormData();

    //     files.forEach((file, i) => {
    //         formData.append(i, file);
    //     });

    //     fetch(`/api/posts/addimage`, {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(images => {
    //             console.log(images);
    //         });
    // }

  render() {
    return <div className="create-post-page">
        <form onSubmit={this.handleSubmit}>
          <div className="create-post-form">
            
          <h5 className="title-post">{this.props.formType}</h5>
          
            <select className="drop-down-vehicle" value={this.state.type} onChange={this.update("type")}>
              <option value="" disabled selected>
                SELECT TYPE
              </option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Truck">Truck</option>
              <option value="Boards">Boards</option>
            </select>
            <br />
            {/* <input type="number" min="0.00" max="10000.00" step="0.01" /> */}
          <input className="input-box" type="number" min="0.00" max="10000.00" value={this.state.price} onChange={this.update("price")} placeholder="Price..." />
            <br />
          <h4>Start Date: </h4><input className="date" placeholder="Start Date" type="date" value={this.state.startdate} onChange={this.update("startdate")} />
          <br />
          <h4>End Date: </h4><input className="date" placeholder="End Date" type="date" value={this.state.enddate} onChange={this.update("enddate")} />
          <br />
          <input className="input-box" type="text" value={this.state.pickup} onChange={this.update("pickup")} placeholder="Pickup location..." />
            <br />
            {/* <input type='file' id='multi' onChange={this.onChange} multiple /> */}
            <br />
            <input type="submit" value="Submit" />
            
          <textarea className="input-textarea" value={this.state.description} onChange={this.update("description")} placeholder="Description..." />
          <br />
            <input className="post-submit" type="submit" value="Submit" />
          </div>
        </form>
        <form action='/api/posts/addimage' method="post" enctype="multipart/form-data">
          <input type='file' name='image' />
        </form>

        <br />
        <PostBox postData={this.state} />
      </div>;
  }
}

export default PostCompose;