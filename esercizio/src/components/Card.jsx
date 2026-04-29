import { Component } from "react"
import { Card } from "react-bootstrap"

// const MyCard = function (props) {
//   return props.array.map((book, i) => {
//     return (
//       <div className="g-3" key={book.asin + i}>
//         <Card className="p-0 m-0 col h-100">
//           <Card.Img className="w-100" variant="top" src={book.img} />
//           <Card.Body className="d-flex flex-column">
//             <Card.Title className="fst-italic">{book.title}</Card.Title>
//             <Card.Subtitle className="text-secondary flex-grow-1">{book.category}</Card.Subtitle>
//             <Card.Text className="my-2 fw-bold fs-4">{book.price}$</Card.Text>
//             <Card.Text style={{ fontSize: "0.75em" }}>{book.asin}</Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     )
//   })
// }

// export default MyCard

class MyCard extends Component {
  state = {
    clicked: false,
  }

  render() {
    return (
      <div className="g-3" key={this.props.book.asin}>
        <Card
          className="p-0 m-0 col h-100"
          style={{ border: this.state.clicked ? "2px solid red" : "2px solid grey" }}>
          <Card.Img
            className="w-100"
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({ clicked: !this.state.clicked })
            }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="fst-italic">{this.props.book.title}</Card.Title>
            <Card.Subtitle className="text-secondary flex-grow-1">
              {this.props.book.category}
            </Card.Subtitle>
            <Card.Text className="my-2 fw-bold fs-4">{this.props.book.price}$</Card.Text>
            <Card.Text style={{ fontSize: "0.75em" }}>{this.props.book.asin}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default MyCard
