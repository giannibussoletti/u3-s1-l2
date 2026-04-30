import { Component } from "react"
import { Button, ListGroup, Alert } from "react-bootstrap"

class CommentList extends Component {
  getComments = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          this.props.getComments(this.props.asin)
        } else {
          throw new Error("Errore nel recupero", response.status)
        }
      })
      .catch((err) => {
        return <Alert variant="danger">errore nella fetch: {err}</Alert>
      })
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
        console.log(comment.elementId)
      })
      .catch((err) => console.log("errore di recupero" + err))
  }

  render() {
    return (
      <div className="my-2">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span>{this.props.comment.comment}</span>
          <Button
            variant="danger"
            onClick={() => {
              this.deleteComments(this.props.comment._id)
            }}>
            🗑️
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>Voto: {this.props.comment.rate}</ListGroup.Item>
      </div>
    )
  }
}
export default CommentList
