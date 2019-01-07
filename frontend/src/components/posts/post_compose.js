import React from 'react';
import PostBox from './post_box';

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
          photoFile: null
        //   newPost: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

//   componentWillReceiveProps(nextProps) {
//       this.setState({newPost: nextProps.newPost.text});
//   }

    // handleSubmit(e) {
    //     e.preventDefault();

    //     this.props.action(this.state).then(action => {
    //         this.props.history.push(`/posts/${action.post.id}`);
    //     });

    // }

  handleSubmit(e) {
    e.preventDefault();
      let post = {
          type: this.state.type,
          price: this.state.price,
          startdate: this.state.startdate,
          enddate: this.state.enddate,
          description: this.state.description,
          pickup: this.state.pickup,
        //   newPost: "" 
      };

    this.props.composePost(post);
  }

//   update() {
//     return e => this.setState({
//       text: e.currentTarget.value
//     });
//   }

    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
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
                    <form action='/api/images' method="post" enctype="multipart/form-data">
                        <input type='file' name='image' />
                    </form>
                    <br />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <PostBox text={this.state.newPost} />
        </div>
    )
  }
}

export default PostCompose;