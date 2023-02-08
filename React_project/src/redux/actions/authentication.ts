import { AnyAction, Dispatch } from 'redux';
import { LOGIN } from './types';
import { handleError } from '../../utils/handle-error';
import axios from '../../utils/interceptors';
import { createBrowserHistory } from 'history';
import {toast} from 'react-toastify';
export const loginApi = (data:any) => async (dispatch: Dispatch<AnyAction>) => {

    try {
        // eslint-disable-next-line no-console
        console.log('Data', data);
        const response = await axios.post('http://localhost:5000/login',{
            username: data.username,
            password: data.password
        });

         // eslint-disable-next-line no-console
         console.log('payload',response.data);

      if (response.data.message === 'Login Successful') {
            // alert('Success');
            // eslint-disable-next-line no-console
            console.log('paylod',response.data);
            sessionStorage.setItem('access_token',response.data.access_token);
            sessionStorage.setItem('username',data.username);
            sessionStorage.setItem('usertype',response.data.usertype);
            // eslint-disable-next-line no-console
            console.log(response.data.usertype);
            if(response.data.usertype ===2){
                alert('ADMIN LOGIN SUCCESFULLY');
                window.location.href ='http://localhost:3000/home';
            }else if(response.data.usertype ===3){
                alert('USER LOGIN SUCCESFULLY');
                window.location.href ='http://localhost:3000/homes';
            }
        } else {
            alert('Incorrect username or password');
        }
        dispatch({
            type: LOGIN,
            payload: response.data,
        });

        return response.data.data;
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        alert('Login Failed');
    }
};
