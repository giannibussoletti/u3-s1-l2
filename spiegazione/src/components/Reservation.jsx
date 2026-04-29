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
          <Col xs={12}>
            <Form>
              <Form.Group className="mb-3 mt-3">
                <Form.Label htmlFor="name">Nome e Cognome</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Mario Rossi"
                  required
                  //Andiamo a collegare ora i vari inputo allo stato con un "two-way binding"
                  //1) colleghiamo la proprieta  dell'oggetto reservation nello state al valore di inputo value
                  value={this.state.reservation.name} // Valore iniziale "" stringa vuota
                  // 2) facciamo in modo che ogni carattere digitato vada a riempire la value del name dell'oggetto reservation
                  onChange={(e) => {
                    // Questo è un eventListener che va ad ascoltare e viene invocata  ad ogni inserimento del singolo carattere nell'input
                    // e.target.value Valore corrente dell'input
                    // Ora dobbiamo sovrascrivere il valore di this.state.reservation.name con e.target.value
                    this.setState({
                      reservation: {
                        // i tre puntini ... sono chiamati "spread operator" serve per creare mantere una copia delle altre informazioni dell'oggetto in quello che viene aggiornato
                        ...this.state.reservation,
                        name: e.target.value,
                      },
                      // andiamo a scrivere un nuovo oggetto reservation
                    })
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label htmlFor="phone">Telefono</Form.Label>
                <Form.Control
                  id="phone"
                  type="tel"
                  placeholder="+391234567"
                  required
                  value={this.state.reservation.phone}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        phone: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label htmlFor="numberOfPeople">In quanti siete?</Form.Label>
                <Form.Control
                  id="numberOfPeople"
                  type="number"
                  placeholder="2"
                  required
                  min="1"
                  max="8"
                  value={this.state.reservation.numberOfPeople}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        numberOfPeople: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3 mt-3">
                <Form.Check
                  type="checkbox"
                  label="Ci sono Fumatori?"
                  checked={this.state.reservation.smoking}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        // qui usiamo checked che ritorna una booleano ("true" o "false")
                        // la proprietà value con la checkbox riporta una stringa ("on" o "off")
                        smoking: e.target.checked,
                      },
                    })
                  }
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="dateTime">Data e ora</Form.Label>
                <Form.Control
                  id="dateTime"
                  type="datetime-local"
                  required
                  value={this.state.reservation.dateTime}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        dateTime: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3 mt-3">
                <Form.Label htmlFor="specialRequest">
                  {"Richieste particolari (Allergie etc..)"}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  id="specialRequest"
                  value={this.state.reservation.specialRequest}
                  onChange={(e) =>
                    this.setState({
                      reservation: {
                        ...this.state.reservation,
                        specialRequest: e.target.value,
                      },
                    })
                  }
                />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit">
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
