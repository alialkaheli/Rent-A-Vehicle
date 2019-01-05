import React from 'react';
import PostBox from './tweet_box';

class PostCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          type: "",
          price: "",
          daterange: "",
          description: "",
          pickup: "",
          newPost: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

//   componentWillReceiveProps(nextProps) {
//       this.setState({newPost: nextProps.newPost.text});
//   }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state).then(action => {
            this.props.history.push(`/posts/${action.post.id}`);
        });

    }

//   handleSubmit(e) {
//     e.preventDefault();
//     let post = {
//       text: this.state.text
//     };

//     this.props.composePost(tweet); 
//     this.setState({text: ''})
//   }

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
                    <input type="text"
                        value={this.state.price}
                        onChange={this.update("price")}
                        placeholder="Write your price..."
                    />
                    <br />
                    <input type="textarea"
                        value={this.state.description}
                        onChange={this.update("description")}
                        placeholder="Write your description..."
                    />
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