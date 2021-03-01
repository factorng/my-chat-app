import {React, Component} from 'react';
import {Link} from 'react-router-dom'
import './Home.css';

export default class Home extends Component {

    render() {
        return(
            <div className="home center-element">
            <h3 className="home__title">Welcome to My Chat App </h3>
            <p className="home__text">To begin, please, &nbsp; 
                <Link to='/signup' className="home__link">register</Link>
            </p>
            <p className="home__text">or&nbsp; 
                <Link to='/signin' className="home__link">log in</Link>
                    &nbsp;if you already have an account
            </p>
            </div>
        );
    }
}