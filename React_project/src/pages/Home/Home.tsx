import Carousel from 'react-bootstrap/Carousel';
import mal from './static/mal.jpg';
import ava from './static/ava.jpg';
import aveng from './static/aveng.jpg';
import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { Navigate } from 'react-router';
import images from './static/log.png';

import './home.css';
interface NavLinkPropsFix extends NavLinkProps {
    exact: boolean;
    activeClassName: string;
}

import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu } from 'cdbreact';
import { NavLink, NavLinkProps } from 'react-router-dom';

const Home = (props: any) => {
    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('Component Render - Home');
    }, [0]);

    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand className="app-logo" href="#home">
                        <img alt="" src={images} width="30" height="50" className="d-inline-block align-center" /> Movie
                        Mangement application
                    </Navbar.Brand>
                </Navbar>
                <div className="sidebar">
                    <CDBSidebar
                        textColor="#333"
                        backgroundColor="f0f0f0"
                        className={''}
                        breakpoint={0}
                        toggled={false}
                        minWidth={''}
                        maxWidth={''}
                    >
                        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
                        <CDBSidebarContent>
                            <CDBSidebarMenu>
                                <NavLink exact to="/home" activeClassName="activeClicked" {...props}>
                                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="/manage" activeClassName="activeClicked" {...props}>
                                    <CDBSidebarMenuItem icon="user" iconType="solid">
                                        Admin
                                    </CDBSidebarMenuItem>
                                    <NavLink to="/" activeClassName="activeClicked" {...props}>
                                        <CDBSidebarMenuItem icon="user">logout</CDBSidebarMenuItem>
                                    </NavLink>
                                </NavLink>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>
                    </CDBSidebar>
                </div>
            </div>
            <div className="row">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img className="d-block w-100" height="100%" src={mal} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={ava} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={aveng} alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </div>{' '}
        </>
    );
};

export default Home;
