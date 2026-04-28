import { Nav, Navbar, Container } from "react-bootstrap"

const RestaurantNavBar = function () {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Epi-Restaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Menu</Nav.Link>
              <Nav.Link href="#">Prenota un Tavolo</Nav.Link>
              <Nav.Link href="#">Amministrazione</Nav.Link>
              <Nav.Link href="#">Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default RestaurantNavBar
