import { Component } from "react"
import { Col, Button } from "react-bootstrap"

class FilterButton extends Component {
  state = {
    genreClicked: false,
  }
  render() {
    return (
      <Col key={this.props.genre} className="d-flex justify-content-center px-1 mb-4 mb-sm-0">
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
