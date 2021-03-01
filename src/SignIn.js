import {React, Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { signin } from './utils/auth';
import { connect } from 'react-redux'
import { userSignIn } from './store/actions/actions';
import './SignIn.css';

class SignIn extends Component {

    constructor(props) {

        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    handleInputChange(e) {

        this.setState({[e.target.name]: e.target.value});

    };

    async handleSubmit(e) {

        e.preventDefault();
        try{
            const user = await signin(this.state.email, this.state.password);
            this.props.userSignIn(user);
            this.props.history.push('/chat');
        } catch(error) {
            this.setState({error: error.message});
        }
        
    }

    render() {
        return (
            <div className="center-element">
                <form className="sign-in" onSubmit={(e) => this.handleSubmit(e)} autoComplete="off">
                    <h1>Sign in</h1>
                    <div>
                        <input placeholder="Email" name="email" type="email"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.email}/>
                    </div>
                    <div>
                        <input placeholder="Password" name="password"
                        onChange={(e) => this.handleInputChange(e)} value={this.state.password}
                        type="password"/>
                    </div>
                    {this.state.error ? <p className="sign-in__error">{this.state.error}</p> : null}
                    <button type="submit" className="sign-in__button">Sign in</button>
                    <Link to='/signup' className="home__link">register</Link>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = {
    userSignIn
}

export default withRouter(connect(null,  mapDispatchToProps)(SignIn));