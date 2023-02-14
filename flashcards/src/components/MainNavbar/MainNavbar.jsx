import {Container, Nav, Navbar} from "react-bootstrap";

function MainNavbar(props) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Azeno Flashcards</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Add Deck</Nav.Link>
                    <Nav.Link href="#pricing">Profile</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;