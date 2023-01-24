import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigate=()=>{
    return(
        <>
        <style type="text/css">
        {`
            .navbar{
                border:0.1px solid black;
                height:5rem
            }
        `}
      </style>
        <Navbar  sticky="top" bg="light bg-transparent">
            <Container>
                <Navbar.Brand href="#home">
                    Tracker
                </Navbar.Brand>
                <Nav className="me-auto ">
                    <Nav.Link href="#Eenie">Eenie</Nav.Link>
                    <Nav.Link href="#Meenie">Meenie</Nav.Link>
                    <Nav.Link href="#Minie">Minie</Nav.Link>
                </Nav>
                <Nav className='ms-auto pe-md-5'>
                    <Nav.Link href="#Mo">Mo</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Navigate;