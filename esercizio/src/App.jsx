import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import WindowAlert from "./components/WindowAlert"
import ListBook from "./components/ListBook"

const App = function () {
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
        <ListBook />
      </main>
      <footer className="mt-4">
        <MyFooter />
      </footer>
    </div>
  )
}
export default App
