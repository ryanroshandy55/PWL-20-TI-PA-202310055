import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';


const Biodata = () => {
  const today =  new Date();
    return (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
              Today is {today.toLocaleString()}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}
export default Biodata;