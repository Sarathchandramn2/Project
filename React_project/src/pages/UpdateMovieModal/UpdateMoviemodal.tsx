import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { updateMovie } from '../manage/ManageService';
import React, { useEffect, useState } from 'react';

//updating the movie modal
const UpdateMovieModal = (props: any) => {
    // eslint-disable-next-line no-console
    console.log('Props: ', props);
    const handleSubmits = (e: any) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log(props, e);
        updateMovie(
            {
                moviename: e.target[0].value,
                moviegenre: e.target[1].value,
                director: e.target[2].value,
                language: e.target[3].value,
            },
            props.movie.movieid
        ).then(
            (result: any) => {
                alert(result);
                window.location.href = 'http://localhost:3000/manage';
                props.setUpdated(true);
                // eslint-disable-next-line no-console
                console.log(result);
                //props.getMovie()
            },
            () => {
                alert('Failed to Add Movie');
            }
        );
    };
    return (
        <div>
            <div className="container">
                <Modal {...props} size="lg" aria_labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">Update Movie Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={handleSubmits}>
                                    <Form.Group controlId="MovieName">
                                        <Form.Label>Movie Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="MovieName"
                                            required
                                            defaultValue={props.movie?.moviename}
                                            placeholder=""
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="MovieGenre">
                                        <Form.Label>Movie Genre</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="MovieGenre"
                                            required
                                            defaultValue={props.movie?.genre}
                                            placeholder=""
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Director">
                                        <Form.Label>Director</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Director"
                                            required
                                            defaultValue={props.movie?.director}
                                            placeholder=""
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Language">
                                        <Form.Label>Language</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Language"
                                            required
                                            defaultValue={props.movie?.language}
                                            placeholder=""
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <p></p>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};
export default UpdateMovieModal;
