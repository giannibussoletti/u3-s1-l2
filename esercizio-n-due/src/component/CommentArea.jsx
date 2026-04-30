import { Component } from "react"
import { Button, ListGroup } from "react-bootstrap"

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
        console.log(comments)
        this.setState({
          comment: comments,
        })
      })
      .catch()
  }

  deleteComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("commento cancellato")
          return response.json()
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .then((comment) => {
        this.getComments(comment.elementId)
      })
      .catch((err) => console.log("errore di recupero" + err))
  }

  componentDidMount() {
    this.getComments(this.props.asin)
  }

  render() {
    return (
      <ListGroup>
        {this.state.comment.map((comment) => {
          return (
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <span>{comment.comment}</span>
              <Button
                variant="danger"
                onClick={() => {
                  this.deleteComments(comment._id)
                }}>
                🗑️
              </Button>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    )
  }
}

export default CommentArea
