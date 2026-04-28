import { Container, Row, Col, Carousel } from "react-bootstrap"

const Home = function () {
  return (
    <Container>
      <Row>
        <Col className="text-center fw-bold mt-3">
          <h1>Epi-Restaurant</h1>
          <h3>Le pizze preferite dai dev</h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Carousel>
            <Carousel.Item>
              <img src="https://placebear.com/600/600" text="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placebear.com/600/600" text="Second Slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placebear.com/600/600" text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
