import "bootstrap/dist/css/bootstrap.min.css"
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
        <div className="container">
          <div className="row row-cols-6">
            {books.map((book) => {
              return (
                <MyCard
                  className="col"
                  key={book.asin}
                  asin={book.asin}
                  title={book.title}
                  img={book.img}
                  price={book.price}
                  category={book.category}
                />
              )
            })}
          </div>
        </div>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}
export default App
