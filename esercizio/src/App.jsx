import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Container } from "react-bootstrap"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import FantasyBooks from "./assets/data/fantasy.json"
import ScifiBooks from "./assets/data/scifi.json"
import RomanceBooks from "./assets/data/romance.json"
import HistoryBooks from "./assets/data/history.json"
import HorrorBooks from "./assets/data/horror.json"
import MyCard from "./components/Card"
import WindowAlert from "./components/WindowAlert"

const App = function () {
  const AllTheBooks = FantasyBooks.concat(ScifiBooks, RomanceBooks, HistoryBooks, HorrorBooks)
  return (
    <div className="content-wrapper d-flex flex-column vh-100">
      <header>
        <MyNav />
      </header>
      <main className="flex-grow-1 position-relative">
        <div className="d-flex justify-content-center">
          <WindowAlert />
        </div>
        <Container fluid className="p-0">
          <img className="mb-5 w-100" src="../public/hero.jpg" />
        </Container>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="justify-content-between">
            {AllTheBooks.map((book) => {
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
      <footer className="mt-4">
        <MyFooter />
      </footer>
    </div>
  )
}
export default App
