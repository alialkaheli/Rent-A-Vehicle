import React from 'react';
import PostBox from './post_box';
// import axios from 'axios';
import "../../css_styling/creating-post.scss";
import request from 'superagent';
// import { Image, Transformation } from 'cloudinary-react';
import Dropzone from 'react-dropzone';

// const cloudinaryUrl = require('../../front_config/cloudinary_keys').cloudinary_url;
// const cloudinaryPreset = require('../../front_config/cloudinary_keys').cloudinary_upload_preset;
// const cloudinary_url = "https://api.cloudinary.com/v1_1/renta-vehicle/image/upload"
// const cloudinary_upload_preset = "xv91fscc"

const CLOUDINARY_UPLOAD_PRESET = 'xv91fscc';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/renta-vehicle/image/upload';


class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = this.props.post;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
      // this.fileUploadHandler = this.fileUploadHandler.bind(this);
      this.onDrop = this.onDrop.bind(this); 
      this.handleImageUpload = this.handleImageUpload.bind(this);
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
          photoFile: this.state.photoFile,
          id: this.state._id,
          photoUrl: this.state.photoUrl

        //   newPost: "" 
      };

   

    // this.props.action(post);
   
    this.props.action(post).then(action => {
      this.props.history.push(`/posts`);
    }).catch(fail => {
      console.log(fail);
    });
  }
  onDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
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

    // fileUploadHandler(e) {
    //     e.preventDefault();
    //     // let file = e.currentTarget.value;
    //     let formData = new FormData();
    //     formData.append("image", this.state.photoFile);
    //     formData.append("upload_preset", cloudinary_upload_preset);
        

    //     axios({
    //         url: cloudinary_url,
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded"
    //         },
    //         data: formData
    //     })
    //     .then( (data) => {this.state.formType = data})
    //     .catch();
    // }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file);

    upload.end((error, response) => {
      if (error) {
        console.error(error);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          photoFile: response.body.secure_url,
          uploadedFile: null
        });
      }
    });
  }
    
  update(property) {
      return e => this.setState({
          [property]: e.target.value
      });
  }

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
            
            
          <textarea className="input-textarea" value={this.state.description} onChange={this.update("description")} placeholder="Description..." />
          <br />
          {/* <input type='file' name='image' onChange={this.fileSelectedHandler} /> 
          <button onClick={this.fileUploadHandler}>Submit image</button> */}
          <div className="drop-container">Upload an image:
            <Dropzone multiple={false}
                accept='image/*'
                onDrop={this.onDrop}
                className='photo-image-dropbox'>
                <p>Drag and drop an Image</p>
            </Dropzone>
            <div className="selected-image">Your selected image: </div><div>{this.props.photoUrl}</div>
          </div>

          <br />
            <input className="post-submit" type="submit" value="Submit" />
          </div>
        </form>
        {/* <form action='/api/posts/addimage' method="post" enctype="multipart/form-data">
          <input type='file' name='image' />
        </form> */}

        <br />
        <PostBox postData={this.state} />
      </div>;
  }
}

export default PostCompose;