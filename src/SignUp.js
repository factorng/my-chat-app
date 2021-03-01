import {React, Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signup, updateUser} from './utils/auth';
import './SignUp.css'

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            avatar: '',
            error: null
        }
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    async handleSubmit(e) {
        e.preventDefault();
        try {
            await signup(this.state.email, this.state.password);
            await updateUser(this.state.name, this.state.avatar);
            this.props.history.push('/signin');
        } catch(error) {
            this.setState({error: error.message});
        }
    }

    render() {
        return (
            <div className="center-element">
                <form className="sign-up" onSubmit={(e) => this.handleSubmit(e)} autoComplete="off">
                    <h1>Sign Up</h1>
                    <div>
                        <input placeholder="Email" name="email" type="email"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.email}/>
                    </div>
                    <div>
                        <input placeholder="Password" name="password"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.password}
                        type="password"/>
                    </div>
                    <div>
                        <input placeholder="Name" name="name"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.name}
                        type="text"/>
                    </div>
                    <div>
                        <input placeholder="Avatar URL" name="avatar"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.avatar}
                        type="url"/>
                    </div>
                    {this.state.error ? <p className="sign-up__error">{this.state.error}</p> : null}
                    <button type="submit" className="sign-up__button">Sign up</button>
                    <Link to='/signin' className="home__link">log in</Link>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUp);