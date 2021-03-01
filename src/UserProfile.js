import React from 'react';
import './UserProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import {  userSignOut } from './store/actions/actions';
import { getSetUserData } from './store/actions/actions';

export default function UserProfile (props) {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(getSetUserData());
    }, [user.authenticated, dispatch]);
    
    return (
        <>
            {user.authenticated  ? 
                <div className="user-info">
                    <h3 className="user-info__name">{user.name}
                        <span className="user-info__email">{user.email}</span>
                    </h3>
                    <div className="user-info__border">
                        <div className="user-info__avatar" style={{backgroundImage: `url(${user.avatar})`}} ></div>
                    </div>
                    <button className="user-info__button" onClick={() => dispatch(userSignOut())}>Sign out</button>
                </div>  
            :
            ''
            }     
        </>
    );

}

