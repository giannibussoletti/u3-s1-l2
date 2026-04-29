import { Component } from "react"
import { Col, Button } from "react-bootstrap"

class FilterButton extends Component {
  state = {
    genreClicked: false,
  }
  render() {
    return (
      <Col key={this.props.genre} className="d-flex justify-content-center gap-3">
        <Button
          variant={this.state.genreClicked ? "primary" : "secondary"}
          onClick={() => {
            this.setState({
              genreClicked: !this.state.genreClicked,
            })
          }}
          className="flex-grow-1">
          {this.props.genre}
        </Button>
      </Col>
    )
  }
}

export default FilterButton
