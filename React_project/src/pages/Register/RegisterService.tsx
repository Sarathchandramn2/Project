import axios from 'axios';
import React, { useState } from 'react';

const registerUser = async (fullname: string, username: string, password: string) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
            fullname,
            username,
            password,
        });
        // eslint-disable-next-line no-console
        console.log(response.data);
        alert(' Sucessfully registered');
        window.location.href = 'http://localhost:3000/';
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        alert('Ooops! Requirement Unstatisfied !');
    }
};

export default registerUser;
