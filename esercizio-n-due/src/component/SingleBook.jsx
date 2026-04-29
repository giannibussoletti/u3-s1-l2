import { Component } from "react"
import { Button, Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    clicked: false,
  }

  render() {
    return (
      <Card
        className="h-100"
        style={{ border: this.state.clicked ? "2px solid red" : "1px solid grey" }}>
        <Card.Img
          variant="top"
          src={this.props.image}
          onClick={() => {
            this.setState({
              clicked: !this.state.clicked,
            })
          }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1">{this.props.title}</Card.Title>
          <Card.Subtitle>{this.props.genre}</Card.Subtitle>
          <Card.Text>{this.props.price}</Card.Text>
          <Card.Text>{this.props.asin}</Card.Text>
          <Button variant="primary">Comprami</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
