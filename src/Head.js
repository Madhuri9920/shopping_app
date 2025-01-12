import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'; 
import { Link } from 'react-router-dom';
import './App.css';

function Head(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Electronics">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/Jewelery">Jewelery</Nav.Link>
            <Nav.Link as={Link} to="/MensClothes">Men'sClothes</Nav.Link>
            <Nav.Link as={Link} to="/WomensClothes">Women'sClothes</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    </>
)
}
export default Head;

