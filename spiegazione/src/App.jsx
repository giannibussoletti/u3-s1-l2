import "bootstrap/dist/css/bootstrap.min.css"

import RestaurantNavBar from "./components/RestaurantNavBar"
import RestaurantFooter from "./components/RestaurantFooter"
import Home from "./components/Home"

const App = function () {
  return (
    <>
      <header>
        <RestaurantNavBar />
      </header>
      <main className="flex-grow-1">
        <Home />
      </main>
      <footer>
        <RestaurantFooter />
      </footer>
    </>
  )
}

export default App
