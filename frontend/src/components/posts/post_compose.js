import React from 'react';
import PostBox from './post_box';
import axios from 'axios';
const cloudinaryUrl = require('../../front_config/cloudinary_keys').cloudinary_url;
const cloudinaryPreset = require('../../front_config/cloudinary_keys').cloudinary_upload_preset;


class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          type: "",
          price: "",
          startdate: "",
          enddate: "",
          description: "",
          pickup: "",
          photoFile: ""
        //   newPost: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
      this.fileUploadHandler = this.fileUploadHandler.bind(this);
  } 

//   componentWillReceiveProps(nextProps) {
//       this.setState({newPost: nextProps.newPost.text});
//   }

  handleSubmit(data) {
    // data.preventDefault()
    debugger
      let post = {
          type: this.state.type,
          price: this.state.price,
          startdate: this.state.startdate,
          enddate: this.state.enddate,
          description: this.state.description,
          pickup: this.state.pickup,
          photoFile: data
        //   newPost: "" 
      };

    this.props.composePost(post); 
  }

    // handleFile(e) {
    //     this.setState({ photoFile: e.currentTarget.files[0] });
    // }

  fileSelectedHandler(e) {
    //   console.log("Made it");
    //   debugger
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

  render() {
    return (
        <div>
            <form action='/api/images' method="post" encType="multipart/form-data" onSubmit={this.fileUploadHandler}>
                <div>
                    <select className="drop-down-vehicle" value={this.state.type} onChange={this.update("type")}>
                        <option value='' disabled selected >SELECT TYPE</option>
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Truck">Truck</option>
                        <option value="Boards">Boards</option>
                    </select>
                    <br />
                    <input type="textarea"
                        value={this.state.description}
                        onChange={this.update("description")}
                        placeholder="Description..."
                    />
                    <br />
                    <input type="number"
                        min="0.00"
                        max="10000.00"
                        
                        value={this.state.price}
                        onChange={this.update("price")}
                        placeholder="Price..."
                    />
                    <br />
                    <input type="text"
                        value={this.state.pickup}
                        onChange={this.update("pickup")}
                        placeholder="Pickup location..."
                    />
                    <br />
                    <input className="startdate-box" placeholder="Start Date" type="date" value={this.state.startdate} onChange={this.update("startdate")} />
                    <input className="enddate-box" placeholder="End Date" type="date" value={this.state.enddate} onChange={this.update("enddate")} />
                    
                    <br />
                    {/* <input type="submit" value="Submit" /> */}
                    <input type='file' name='post-image' onChange={this.fileSelectedHandler} />
                    <button onClick={this.fileUploadHandler}>Submit</button>
                </div>
            </form>
            <br />
            {/* <form action='/api/images' method="post" encType="multipart/form-data">
                <input type='file' name='post-image' onChange={this.fileSelectedHandler} />
            </form> */}
            <br />
            <PostBox text={this.state.newPost} />
        </div>
    )
  }
}

export default PostCompose;