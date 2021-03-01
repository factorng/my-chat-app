import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideError } from './store/actions/actions';
import './ErrorPopup.css'

export default function ErrorPopup(props) {
    const error = useSelector((state) => state.app.error)
    const dispatch = useDispatch();

    return (
        <>
        {error ? 
            <div className="error-popup__wrapper">
                <div className="error-popup">
                    <p>An error occured: <br/>{error}</p>
                    <button className="error-popup__button-close" onClick={() => dispatch(hideError())}></button>
                </div>
            </div>
            :
            ''
        }
        </>
    );
}