import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ListBook from "./component/ListBook"
import ScifiBooks from "./data/scifi.json"
import RomanceBooks from "./data/romance.json"
import HistoryBooks from "./data/history.json"
import HorrorBooks from "./data/horror.json"
import FantasyBooks from "./data/fantasy.json"

const App = function () {
  const AllTheBooks = ScifiBooks.concat(RomanceBooks, HistoryBooks, HorrorBooks, FantasyBooks)
  return (
    <>
      <header></header>
      <main>
        <ListBook object={AllTheBooks} />
      </main>
      <footer></footer>
    </>
  )
}

export default App
