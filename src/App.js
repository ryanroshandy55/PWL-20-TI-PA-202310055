import logo from './logo.svg';
import './App.css';
import './component/Biodata.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Accordion, ThemeProvider, Row, Col } from 'react-bootstrap';
import Biodata from './component/Biodata.js';
import NavbarTop from './component/NavbarTop.js';
import ValidateFo from './component/ValidateFo';

function App() {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
    >
      <div className="App"> 
      <ValidateFo />
      </div>
    </ThemeProvider>
  );
}

export default App;
