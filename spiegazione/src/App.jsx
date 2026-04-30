import "bootstrap/dist/css/bootstrap.min.css"
import Reservation from "./components/Reservation"
import RestaurantNavBar from "./components/RestaurantNavBar"
import RestaurantFooter from "./components/RestaurantFooter"
import Home from "./components/Home"
import BackOffice from "./components/BackOffice"
import { Col, Container, Row } from "react-bootstrap"

const App = function () {
  return (
    <>
      <header>
        <RestaurantNavBar />
      </header>
      <main className="flex-grow-1">
        <Container>
          <Row>
            <Col className="text-center fw-bold mt-3">
              <h1>Epi-Restaurant</h1>
              <h3>Le pizze preferite dai dev</h3>
            </Col>
          </Row>
        </Container>
        {/*BackOffice*/}
        <BackOffice />
        {/* Componente prenotazione */}
        <Reservation />
        {/* Componente Home */}
        <Home />
      </main>
      <footer>
        <RestaurantFooter />
      </footer>
    </>
  )
}

export default App
