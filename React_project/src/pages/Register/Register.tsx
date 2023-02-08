import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import registerUser from './RegisterService';
import { ToastContainer } from 'react-bootstrap';

const Register = () => {
    const [fullname, setfullname] = useState('');
    const [usernameReg, setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [error, setError] = useState<{
        fullname?: string;
        usernameReg?: string;
        passwordReg?: string;
        confpasswordReg?: string;
    }>({});

    const navigate = useNavigate();

    // Validation for the Registration fields
    const validate = () => {
        const newError: { fullname?: string; lastname?: string; usernameReg?: string; passwordReg?: string } = {};
        if (!fullname) {
            newError.fullname = 'First name is required';
        }
        if (!usernameReg) {
            newError.usernameReg = 'Username is required';
        }
        if (!passwordReg) {
            newError.passwordReg = 'Password is required';
        }
        setError(newError);
        return Object.keys(newError).length === 0;
    };

    // Recalling function for Register
    const Handleclick = (e: any) => {
        e.preventDefault();
        if (validate()) {
            registerUser(fullname, usernameReg, passwordReg);
        }
    };

    return (
        <>
            {' '}
            <ToastContainer />
            <section className="vh-90 gradient-custom" id="fullbox">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5" id="bgcolor">
                            <div className="card bg-dark text-white" id="logbox">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5" id="formbox">
                                        <h2 className="fw-bold mb-2 text-uppercase" id="loginpara">
                                            <b>Register</b>
                                        </h2>
                                        <p className="text-white-50 mb-5" id="paratext">
                                            Please enter your Details!
                                            <br></br>
                                        </p>
                                        <div>
                                            <p className="mb-0" id="signuplink">
                                                Already have an account?{' '}
                                                <Link to="/" className="text-white-50 fw-bold">
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Firstname
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="text"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                name="firstname"
                                                value={fullname}
                                                onChange={(e) => setfullname(e.target.value)}
                                            />
                                            {error.fullname && <span className="error">{error.fullname}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typeEmailX" id="userlabel">
                                            Username
                                        </label>
                                        <div className="form-outline form-white mb-4" id="inputboxx">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={usernameReg}
                                                onChange={(e) => setusernameReg(e.target.value)}
                                            />
                                            {error.usernameReg && <span className="error">{error.usernameReg}</span>}
                                        </div>
                                        <label className="form-label" htmlFor="typePasswordX" id="userlabel">
                                            Password
                                        </label>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={passwordReg}
                                                onChange={(e) => setpasswordReg(e.target.value)}
                                            />
                                            {error.passwordReg && <span className="error">{error.passwordReg}</span>}
                                        </div>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            id="submitbtnn"
                                            type="submit"
                                            onClick={Handleclick}
                                        >
                                            Register{' '}
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0" id="signuplink">
                                            Already have an account?{' '}
                                            <Link to="/" className="text-white-50 fw-bold">
                                                Login
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
export default Register;
