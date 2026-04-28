import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import RestaurantNavBar from "./components/RestaurantNavBar"
import RestaurantFooter from "./components/RestaurantFooter"

const App = function () {
  return (
    <>
      <header>
        <RestaurantNavBar />
      </header>
      <main className="flex-grow-1">
        <Container fluid>
          <Row>
            <Col>
              <p>Hello</p>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <RestaurantFooter />
      </footer>
    </>
  )
}

export default App
