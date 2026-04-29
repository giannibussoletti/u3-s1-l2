// form per permettere agli utenti di prenotare un tavolo
// Le info salvate in questo form verranno inviate ad una API per salvarle
// Useremo POST per salvarle

import { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"

// - OGNI VOLTA CHE UN COMPONENTE POSSIEDE UN INPUT FIELDS
// CI SARÀ BISOGNO DI UNO "STATE"
// Quindi il componente dovrà essere un componente a classe
// perché solo le classi hanno lo STATE
// Le classi hanno bisogno di un metodo obbligatorio chiamato "render"
// dove all'interno si inserisce il return

// info necessari per la prenotazione:

// name // string
// phone // string
// numberOfPeople // string | number
// smoking // boolean
// dateTime // string
// specialRequest // string | undefined

class Reservation extends Component {
  state = {
    // all' interno di questo state come sempre memorizzo informazioni che collegano 1a logica
    // del componente all 'interfaccia
    // nel caso di oggi 10 utilizzeremo per tenere traccia dei valori dei campi del form
    // direttamente durante 1a loro compilazione
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      smoking: false,
      dateTime: "",
      specialRequest: "",
    },
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center fw-bold mt-3">
            <h1>Epi-Restaurant</h1>
            <h3>Le pizze preferite dai dev</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center fw-bold mt-3">
            <h3>Prenota un tavolo</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nome E cognome</Form.Label>
                <Form.Control id="name" type="text" placeholder="Mario Rossi" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="phone">Telefono</Form.Label>
                <Form.Control id="phone" type="tel" placeholder="+391234567" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="numberOfPeople">In quanti siete?</Form.Label>
                <Form.Control
                  id="numberOfPeople"
                  type="number"
                  placeholder="2"
                  required
                  min="1"
                  max="8"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Ci sono Fumatori?" />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="dateTime">Data e ora</Form.Label>
                <Form.Control id="dateTime" type="datetime-local" required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="specialRequest" className="mb-3">
                  {"Richieste particolari (Allergie etc..)"}
                </Form.Label>
                <Form.Control as="textarea" id="specialRequest" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Reservation
