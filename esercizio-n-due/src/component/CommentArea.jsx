import { Component } from "react"
import { ListGroup, Alert } from "react-bootstrap"
import AddComment from "./AddComment"
import CommentList from "./CommentList"

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
      .catch((err) => {
        return <Alert variant="danger">errore nella fetch: {err}</Alert>
      })
  }

  componentDidMount() {
    this.getComments(this.props.asin)
  }

  render() {
    return (
      <>
        <ListGroup>
          {this.state.comment.map((comment) => {
            return (
              <CommentList
                getComments={this.getComments}
                asin={this.props.asin}
                value={comment._id}
                comment={comment}
                key={comment._id}
              />
            ) //
          })}
        </ListGroup>
        <AddComment asin={this.props.asin} getComments={this.getComments} />
      </>
    )
  }
}

export default CommentArea
