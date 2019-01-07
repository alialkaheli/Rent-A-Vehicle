import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css_styling/login.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/posts');
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-page-wrapper">
                <div className="login-background-img">

                    <div className="login-form-wrapper">
                        <div className="login-form-container">
                            <h1 className="login-text">Please Sign In</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <input className="login-field input" type="text"
                                        value={this.state.email}
                                        onChange={this.update('email')}
                                        placeholder="Email"
                                    />
                                    <br />
                                    <input className="login-field input" type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        placeholder="Password"
                                    />
                                    <br />
                                    <input className="login-field submit" type="submit" value="Submit" />
                                    {this.renderErrors()}
                                </div>
                            </form>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);