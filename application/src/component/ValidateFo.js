import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form, Container, Button, Col, Row, Modal } from 'react-bootstrap';

function ValidateFo () {
  const date = new Date();
  const currentYear = date.getFullYear();

  const initialValues = { Firstname: "", Middlename: "", Lastname: "", email: "", password: "", Birthdate: "" };
  const [ NPM, setNPM ] = useState(0);
  const [ formValues, setFormValues ] = useState(initialValues);
  // const [ formErrors, setFormErrors ] = useState("");
  // const [ isSubmit, setIsSubmit ] = useState(false);
  const [ show, setShow ] = useState(false);
  const [ validated, setValidated ] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

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

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const Age = currentYear - parseInt(formValues.Birthdate.slice(0, 4));

  return (
    <div>
      <div className='Content-header'>
        <div className='Con'>
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div style={{textAlign:"center"}}>
                <img style={{alignItems:'center'}} src={process.env.PUBLIC_URL + "/logo192.png"} width="192" alt="logo" />
                
                <h1 id='TitleForm' className='Head mt-5'>Sign Up</h1>
              </div>
              <Form.Group className='mb-3' controlId='formGridNpm'>
                <div className='Field-1'>
                    <Form.Label>NPM</Form.Label>
                    <Form.Control
                    size='lg'
                    name="NPM"
                    placeholder="NPM Max 10 Number"
                    maxLength={10}
                    onChange={(e) => setNPM(e.target.value)} 
                    onKeyPress={(event) => { 
                        if (!/[0-9]/.test(event.key)){
                          event.preventDefault();
                        }
                      }} 
                      required
                    />
                  </div>
                <Row>
                  <Col>
                    <div className='Field-2'>
                      <Form.Label>Firstname</Form.Label>
                      <Form.Control
                      size='lg'
                      className='Input-control' 
                      type='text'
                      name='Firstname'
                      placeholder='Firstname'
                      value={formValues.Firstname}
                      onChange={handleChange} 
                      required 
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className='Field-2'>
                      <Form.Label>Middlename</Form.Label>
                      <Form.Control
                      size='lg'
                      className='Input-control' 
                      type='text'
                      name='Middlename'
                      placeholder='MiddleName'
                      value={formValues.Middlename}
                      onChange={handleChange} />
                    </div>
                  </Col>
                  <Col>
                    <div className='Field-2'>
                      <Form.Label>Lastname</Form.Label>
                      <Form.Control
                      size='lg'
                      className='Input-control' 
                      type='text'
                      name='Lastname'
                      placeholder='Lastname'
                      value={formValues.Lastname}
                      onChange={handleChange} 
                      required
                      />
                    </div>
                  </Col>
                </Row>
                <div className='Field-3'>
                  <Form.Label>Birthdate</Form.Label>
                  <Form.Control
                  size='lg'
                  className='Input-control datepicker'
                  placeholder='YYYY-MM-DD'
                  name='Birthdate'
                  value={formValues.Birthdate}
                  onChange={handleChange}
                  required 
                  />
                </div>
                <div className='Submit'>
                  <Button className='Submitbut' type='submit'><strong>SUBMIT</strong></Button>
                </div>
              </Form.Group>
            </Form>
          </Container>
        </div>
      </div>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Biodata Anda</Modal.Title>
          </Modal.Header>
          <Modal.Body className='show-grid'>
            <Container>
              <Row>
                <Col xs="2" md="3">NPM</Col> 
                <Col md="1">:</Col>
                <Col md="1">{NPM}</Col> 
              </Row>
              <Row>
                <Col xs="2" md="3">Fullname</Col> 
                <Col md="1">:</Col> 
                <Col md="5">{formValues.Firstname} {formValues.Middlename} {formValues.Lastname} </Col>
              </Row>
              <Row>
                <Col xs="2" md="3">Age</Col> 
                <Col md="1">:</Col> 
                <Col md="5">{Age}th</Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

export default ValidateFo;