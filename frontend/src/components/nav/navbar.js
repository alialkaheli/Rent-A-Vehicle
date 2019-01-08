import React from 'react';
import { Link } from 'react-router-dom';
import '../../css_styling/00reset.scss'
import '../../css_styling/navbar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/posts'}>All Posts</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/posts/new_post'}>Write a Post</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="buttons">
                    <Link className="auth-button-links" to={'/signup'}>Signup</Link>
                    <Link className="auth-button-links" to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return <div className="nav-header">
            <div className="nav-wrapper">
              <div className="nav-name">
              <div className="title-pic"></div>
                <Link className= "nav-title-header" to="/">Rent-A-Vehicle</Link>
              </div>

              <div className="auth-buttons">{this.getLinks()}</div>
            </div>
          </div>;
    }
}

export default NavBar;