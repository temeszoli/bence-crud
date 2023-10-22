import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

export default function Header(){
    return(
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Bence CRUD</Navbar.Brand>
                    </LinkContainer>
                        <Nav className="me-auto">
                            <LinkContainer to="/create">
                            <Nav.Link>Create</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/read">
                            <Nav.Link>Read</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>CE</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>    
           </> 
    );
}