import React from 'react';
import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Movies from '../../pages/Movies/Movies';
import Manage from '../../pages/manage/Manage';
import Register from '../../pages/Register/Register';
import Homeuser from '../../pages/Homeuser/Homeuser';
import Homesuser from '../../pages/Homesuser/Homesuser';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/manage' element={<Manage/>}/>
            <Route path='/homeuser' element={<Homeuser/>}/>
            <Route path='/homes' element={<Homesuser/>}/>


        </Routes>
    );
};

export default AppRoutes;
