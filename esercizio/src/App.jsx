import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Container } from "react-bootstrap"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import books from "./assets/data/fantasy.json"
import MyCard from "./components/Card"

const App = function () {
  return (
    <div className="content-wrapper d-flex flex-column vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1">
        <Container fluid className="p-0">
          <img className="mb-5 w-100" src="../public/hero.jpg" />
        </Container>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="justify-content-between">
            {books.map((book) => {
              return (
                <MyCard
                  key={book.asin}
                  asin={book.asin}
                  title={book.title}
                  img={book.img}
                  price={book.price}
                  category={book.category}
                />
              )
            })}
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}
export default App
