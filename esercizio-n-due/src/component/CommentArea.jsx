import { Component } from "react"
import { ListGroup } from "react-bootstrap"

class CommentArea extends Component {
  state = {
    comment: [],
  }

  getComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .then((comments) => {
        this.setState({
          comment: comments,
        })
      })
      .catch()
  }

  componentDidMount() {
    this.getComments(this.props.asin)
  }
  render() {
    return (
      <ListGroup>
        {this.state.comment.map((comment) => {
          return <ListGroup.Item>{comment.comment}</ListGroup.Item>
        })}
      </ListGroup>
    )
  }
}

export default CommentArea
