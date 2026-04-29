import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import ListBook from "./component/ListBook"
import MyNav from "./component/MyNav"
import WindowAlert from "./component/WindowAlert"
import MyFooter from "./component/MyFooter"

import ScifiBooks from "./data/scifi.json"
import RomanceBooks from "./data/romance.json"
import HistoryBooks from "./data/history.json"
import HorrorBooks from "./data/horror.json"
import FantasyBooks from "./data/fantasy.json"

const App = function () {
  const AllTheBooks = ScifiBooks.concat(RomanceBooks, HistoryBooks, HorrorBooks, FantasyBooks)
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main className="position-relative">
        <div className="d-flex justify-content-center">
          <WindowAlert />
        </div>
        <Container fluid className="p-0">
          <img className="mb-5 w-100" src="../public/hero.jpg" />
        </Container>
        <ListBook object={AllTheBooks} />
      </main>
      <footer className="mt-4">
        <MyFooter />
      </footer>
    </>
  )
}

export default App
