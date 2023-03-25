import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Accordion, ThemeProvider, Row, Col } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

export default function CardBio() {
  return (
      <div className='Content-header'>
          <Container className='' fluid>
            <Row className='m-2'>
                <Col className='m-2'>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body style={{fontSize:'16px'}}>
                          Today is 
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Testing
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </Col>
              <Col className='m-2'>
                <Accordion>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>Accordion Item 1</Accordion.Header>
                    <AccordionBody>Apa hayo</AccordionBody>                
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>Accordion Item 1</Accordion.Header>
                      <AccordionBody>Apa hayo</AccordionBody>                
                  </Accordion.Item>
              </Accordion>
              </Col>
              <Col className='m-2'>
              <Accordion>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>Accordion Item 1</Accordion.Header>
                    <AccordionBody>Apa hayo</AccordionBody>                
                  </Accordion.Item>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>Accordion Item 1</Accordion.Header>
                      <AccordionBody>Apa hayo</AccordionBody>                
                  </Accordion.Item>
              </Accordion>
              
              </Col>
            </Row>
          </Container>
      </div>

  )
}
