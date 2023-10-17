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
                            <Nav.Link href='/update'>Update</Nav.Link>
                            <Nav.Link href='/delete'>Delete</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                    {/*<NavLink to='/create'>Create</NavLink>
                    <NavLink to='/read'>Read</NavLink>
                    <NavLink to='/update'>Update</NavLink>
                    <NavLink to='/delete'>Delete</NavLink>*/}         
           </> 
    );
}