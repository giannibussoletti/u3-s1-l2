import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import FantasyBooks from "../assets/data/fantasy.json"
import ScifiBooks from "../assets/data/scifi.json"
import RomanceBooks from "../assets/data/romance.json"
import HistoryBooks from "../assets/data/history.json"
import HorrorBooks from "../assets/data/horror.json"
import MyCard from "./Card"

const AllTheBooks = FantasyBooks.concat(ScifiBooks, RomanceBooks, HistoryBooks, HorrorBooks)
class ListBook extends Component {
  state = {
    search: "",
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Cerca..."
                value={this.state.search}
                onChange={(e) => {
                  this.setState({
                    search: e.target.value,
                  })
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="justify-content-between">
          {/* Vecchio metodo */
          /* {AllTheBooks.map((book, i) => {
            return (
              <MyCard
                key={book.asin + i}
                asin={book.asin}
                title={book.title}
                img={book.img}
                price={book.price}
                category={book.category}
              />
            )
          })} */}

          {AllTheBooks.map((book) => (
            <MyCard book={book} />
          ))}
        </Row>
      </Container>
    )
  }
}

export default ListBook
