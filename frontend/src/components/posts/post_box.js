import React from 'react';

class PostBox extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.type}</h2>
                <h4>{this.props.description}</h4>
                <h3>{this.props.price}</h3>
                <h3>{this.props.pickup}</h3>
                <h3>{this.props.startdate}</h3>
                <h3>{this.props.enddate}</h3>
            </div>
        );
    }
}

export default PostBox;