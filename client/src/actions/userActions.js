import axios from 'axios';

import history from '../history';

import {
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAIL
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post(
            '/api/users/login',
            {email, password},
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
        history.push('/');
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response ? err.response.data.message : err.message
        })
    }
};





export const register = (name, email, password) => async (dispatch) => {
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const {data} = await axios.post(
            '/api/users/sdd',
            {name, email, password},
            config
        );

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        });

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
        history.push('/');
    } catch (err) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response ? err.response.data.message : err.message
        })
    }
};

export const logout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT
    });
    localStorage.removeItem('userInfo');
}