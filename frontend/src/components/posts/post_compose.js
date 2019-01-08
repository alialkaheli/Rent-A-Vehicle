import React from 'react';
import PostBox from './post_box';
import "../../css_styling/creating-post.scss";

class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = this.props.post;

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
            
          <textarea className="input-textarea" value={this.state.description} onChange={this.update("description")} placeholder="Description..." />
          <br />
            <input className="post-submit" type="submit" value="Submit" />
          </div>
        </form>
        <br />
        <PostBox postData={this.state} />
      </div>;
  }
}

export default PostCompose;