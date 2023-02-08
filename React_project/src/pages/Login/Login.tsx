import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { loginApi } from '../../redux/actions/authentication';
import { AppState, useAppThunkDispatch } from '../../redux/store';
import './style.css';

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const dispatch = useAppThunkDispatch();
    const user = useSelector((state: AppState) => state.user);

    // eslint-disable-next-line no-console
    console.log('User:', user);
    // Recalling function for login
    const Handleclick = (e: any) => {
        e.preventDefault();
        if (!username || !password) {
            // eslint-disable-next-line no-alert
            alert('Username and password are required!');
            return;
        }
        // eslint-disable-next-line no-console
        console.log('Event:', username, password);
        dispatch(
            loginApi({
                username,
                password,
            })
        );
    };

    return (
        <>
            <section className="vh-90 gradient-custom" id="fullboxlog">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" id="bgcolorlog">
                            <div className="card bg-dark text-white" id="logboxlog">
                                <div className="card-body p-5 text-center" id="cardbodylog">
                                    <div className="mb-md-5 mt-md-4 pb-5" id="formboxlog">
                                        <h2 className="fw-bold mb-2 text-uppercase" id="loginparalog">
                                            <b>Movie Management </b>
                                        </h2>
                                        <p className="text-white-50 mb-5" id="paratextlog">
                                            Please enter your login and password!
                                        </p>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabellog">
                                            Username
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxxlog">
                                            <input
                                                type="email"
                                                required
                                                id="typeEmailXlog"
                                                className="form-control form-control-lg"
                                                value={username}
                                                onChange={(e) => usernameupdate(e.target.value)}
                                            />
                                        </div>
                                        <label className="form-label" htmlFor="typePasswordX" id="userlabellog">
                                            Password
                                        </label>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                required
                                                id="typePasswordXlog"
                                                className="form-control form-control-lg"
                                                value={password}
                                                onChange={(e) => passwordupdate(e.target.value)}
                                            />
                                        </div>
                                        <p className="small mb-5 pb-lg-2" id="forgetpasslog">
                                            <a className="text-white-50" href="#!">
                                                Forgot password?
                                            </a>
                                        </p>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            id="submitbtnnlog"
                                            type="submit"
                                            onClick={Handleclick}
                                        >
                                            Login{' '}
                                        </button>
                                    </div>
                                    <div>
                                        <p className="mb-0" id="signuplinklog">
                                            Don&apos;t have an account?{' '}
                                            <Link to="/register" className="text-white-50 fw-bold">
                                                Sign Up
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Login;
