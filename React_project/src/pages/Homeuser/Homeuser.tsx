import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import images from '../Homesuser/static/log.png';

interface NavLinkPropsFix extends NavLinkProps {
    exact: boolean;
    activeClassName: string;
}

import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu } from 'cdbreact';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { getMovie, getGenre } from '../manage/ManageService';

const Manage = (props: any) => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState([]);

    const [isUpdated, setIsupdated] = useState(false);

    let mounted = true;
    useEffect(() => {
        if (movies.length && !isUpdated) {
            return;
        }

        getMovies();

        return () => {
            mounted = false;
            setIsupdated(false);
        };
    }, [isUpdated, movies]);

    useEffect(() => {
        if (genre.length && !isUpdated) {
            return;
        }

        getGenres();

        return () => {
            mounted = false;
            setIsupdated(false);
        };
    }, [isUpdated, movies]);

    function getMovies() {
        getMovie().then((data) => {
            if (mounted) {
                setMovies(data);
            }
            // eslint-disable-next-line no-console
            console.log(data);
        });
    }

    function getGenres() {
        getGenre().then((data) => {
            if (mounted) {
                setGenre(data);
            }
        });
    }

    // eslint-disable-next-line no-console
    console.log('movies', movies);


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
                                <NavLink exact to="/homes" activeClassName="activeClicked" {...props}>
                                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                                </NavLink>
                                <NavLink to="/homeuser" activeClassName="activeClicked" {...props}>
                                    <CDBSidebarMenuItem icon="list">User</CDBSidebarMenuItem>
                                </NavLink>
            <NavLink  to='/'activeClassName="activeClicked"{...props }  >
                    <CDBSidebarMenuItem icon="user">logout</CDBSidebarMenuItem>
            </NavLink>
                      </CDBSidebarMenu>
                        </CDBSidebarContent>
                    </CDBSidebar>
                </div>
            </div>

            <div className="row side-row">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Movie Name</th>
                            <th>Movie Genre</th>
                            <th>Director</th>
                            <th>Language</th>
                            <th>Add Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((mov: any) => (
                            <tr key={mov.movieId}>
                                <td>{mov.movieid} </td>
                                <td>{mov.moviename}</td>
                                <td>{mov.genre}</td>
                                <td>{mov.director}</td>
                                <td>{mov.language}</td>
                                {/* <td>{mov.rating}</td> */}
                                <td>
                                    <StarRatingComponent name="rate1" starCount={5} value={mov.rating} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Manage;
