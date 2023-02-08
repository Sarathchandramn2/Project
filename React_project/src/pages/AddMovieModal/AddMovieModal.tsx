import { Button, Modal, Row, Col, Form, Dropdown } from 'react-bootstrap';
import { addMovie } from '../manage/ManageService';
import React, { useEffect, useState } from 'react';
import { getGenre } from '../manage/ManageService';

const AddMovieModal = (props: any) => {
    const [genre, setGenre] = useState<any>([]);
    const [selectedGenre, setSelectedGenre] = useState<any>({});
    const [isUpdated, setIsupdated] = useState(false);

    let mounted = true;

    useEffect(() => {
        if (genre.length && !isUpdated) {
            return;
        }

        getGenres();

        return () => {
            mounted = false;
            setIsupdated(false);
        };
    }, [isUpdated, genre]);

    function getGenres() {
        getGenre().then((data) => {
            if (mounted) {
                setGenre(data);
            }
        });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log('Event: ', e.target);
        addMovie(e.target).then(
            (result) => {
                // eslint-disable-next-line no-console
                console.log('result', result);
                alert(result.message);
                window.location.href = 'http://localhost:3000/manage';
                props.setUpdated(true);
            },
            (error: any) => {
                alert('Failed to Add Movie');
            }
        );
    };
    return (
        <div className="container">
            <Modal {...props} size="lg" aria_labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Fill in Movie Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="MovieName">
                                    <Form.Label>Movie Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="MovieName"
                                        required
                                        placeholder=""
                                        onChange={(e: any) => {
                                            if (!isNaN(e.target.value)) {
                                                alert('Movie name must be a string');
                                            }
                                        }}
                                    />
                                </Form.Group>
                                <br></br>
                                <div className="dropDown">
                                    <Form.Select defaultValue={'0'} aria-label="Default select example">
                                        <option value={'0'} disabled>
                                            {'---Select Genre---'}
                                        </option>
                                        {genre.map((g: any) => (
                                            <option key={g.genreid} value={g.genreid}>
                                                {g.genre}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <Form.Group controlId="Director">
                                    <Form.Label>Director</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Director"
                                        required
                                        placeholder=""
                                        onChange={(e: any) => {
                                            if (!isNaN(e.target.value)) {
                                                alert('Director name must be a string');
                                            }
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="Language">
                                    <Form.Label>Language</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="Language"
                                        required
                                        placeholder=""
                                        onChange={(e: any) => {
                                            if (!isNaN(e.target.value)) {
                                                alert('Language must be a string');
                                            }
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Add
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </div>
    );
};
export default AddMovieModal;
