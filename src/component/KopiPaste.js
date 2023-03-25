import {React, useState } from 'react'
import { Form, Button, Card, Modal, Row, Col, Container } from "react-bootstrap";

export default function KopiPaste() {
    const date = new Date();
    const currentYear = date.getFullYear();

    const [ NPM, setNPM ] = useState(0);
    const [ FirstName, setFirstName ] = useState(0);
    const [ MiddleName, setMiddleName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ Birthdate, setBirthdate ] = useState("");
    const [ show, setShow ] = useState (false);
    const [ validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            setShow(true);
        }
        setValidated(true);
    };

    const Age = currentYear - parseInt(Birthdate.slice(0, 4));

    return (
        <div>
            <Card>
                <Card.Body className='mt-5 mb-5 border rounded p-4 bg-white drop-shadow'>
                    <Card.Title className='text-center mb-4'>Form Mahasiswa</Card.Title>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className='mb-3' controlId='formGridNPM'>
                                <Form.Label>NPM</Form.Label>
                                <Form.Control
                                placeholder='NPM'
                                maxLength={10}
                                onChange={(e) => setNPM(e.target.value)}
                                onKeyPress={(event) => {
                                    if(!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                required />
                                <Form.Text className='text-muted' style={{fontSize:"12px"}}>
                                    *NPM can only be filled with numbers and a maximum of 10 entries
                                </Form.Text>
                            </Form.Group>
                            <Button variant='primary' type="submit">
                                Submit
                            </Button>
                        </Form>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton className='d-flex justify-content-center'>
                    <Modal.Title>Form Mahasiswa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>NPM : {NPM} </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
  )
}
