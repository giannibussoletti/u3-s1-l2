import { Component } from "react"
import { Alert, Button, Form } from "react-bootstrap"

class AddComment extends Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
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
        console.log("sono in comments")
        this.setState({
          comment: comments,
        })
      })
      .catch((err) => {
        return <Alert variant="danger">errore nella fetch: {err}</Alert>
      })
  }

  addComments = (comment) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzM2YzMmYwNDIwZDAwMTUxNTVhNjgiLCJpYXQiOjE3Nzc1NDkxMDYsImV4cCI6MTc3ODc1ODcwNn0.ayymljkRTiTsMa1RwuM16jzpr5stt4gdIysEoln-lVs",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("commento aggiunto")

          this.setState({
            comments: {
              comment: "",
              rate: "",
              elementId: "",
            },
          })
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

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          this.addComments(this.state.comments)
        }}>
        <Form.Control
          as="textarea"
          value={this.state.comments.comment}
          onChange={(e) => {
            this.setState({
              comments: {
                ...this.state.comments,
                comment: e.target.value,
              },
            })
          }}
          placeholder="Lascia un commento"
          style={{ height: "100px" }}
        />
        <Form.Control
          value={this.state.comments.rate}
          onChange={(e) => {
            console.log(e.target.value)
            this.setState({
              comments: {
                ...this.state.comments,
                rate: e.target.value,
              },
            })
          }}
          type="number"
          placeholder="Voto da 1 a 5"
          minLength={1}
          maxLength={5}
        />
        <Button variant="primary" type="submit">
          invia
        </Button>
      </Form>
    )
  }
}

export default AddComment
