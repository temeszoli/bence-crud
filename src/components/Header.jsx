import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){
    return(
            <>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="/">Bence CRUD</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href='/create'>Create</Nav.Link>
                            <Nav.Link href='/read'>Read</Nav.Link>
                            <Nav.Link href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>CE</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>    
           </> 
    );
}