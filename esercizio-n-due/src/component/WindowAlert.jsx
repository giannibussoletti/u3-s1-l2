import { Button, Alert } from "react-bootstrap"
import { useState } from "react"

const WindowAlert = function () {
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="position-absolute p-3">
        <Alert
          show={show}
          variant="success"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
          <Alert.Heading>Benvenuto</Alert.Heading>
          <p>Trova i libri che preferisci nella nostra libreria!</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Chiudimi
            </Button>
          </div>
        </Alert>
      </div>
    </>
  )
}

export default WindowAlert
