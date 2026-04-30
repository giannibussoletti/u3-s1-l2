// II componente di oggi si occuperà di RECUPERARE le prenotazione salvate nel DB tramite l'API di ieri
// e di mostrarle in una lista dedicata all amministrazione
// Se un componente intende recuperare informazioni da uni API, questo componente avrà bisogno di uno STATO
// - > dobbiamo creare questo componente come CLASSE

import { Component } from "react"
import { Col, Container, Row, ListGroup, Spinner, Alert, Button } from "react-bootstrap"

class BackOffice extends Component {
  state = {
    prenotazioni: [],
    // Salvo qui una proprietà per mostrare o nascondere lo Spinner
    isLoading: true,
    isError: false,
  }

  getPrenotazioni = () => {
    // è consigliabile nei componenti a classe creare dei metodi con funzioni freccia,
    // perché queste non hanno un proprio contesto di esecuzione ed ereditano quello circostante,
    // così manteniamo il corretto binding per parole come this
    fetch("https://striveschool-api.herokuapp.com/api/reservation")
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("response errata", response.status)
        }
      })
      .then((prenotazioni) => {
        // ora andiamo a salvare le prenotazion nello state
        this.setState({
          isLoading: false,
          prenotazioni: prenotazioni,
        })
      })
      .catch((err) => {
        console.log("Errore nella fetch", err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  deletePrenotazioni = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/reservation/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Eliminata")
          this.getPrenotazioni()
        } else ("Response non ok", response.status)
      })
      .catch((err) => {
        console.log("Errore nella fetch", err)
      })
  }

  // Il posto dove inserire il getPrenotazioni() è componentDidMount(){}
  componentDidMount() {
    // questo è un metodo riservato nei componenti a classe, quindi il suo nomne
    // non può essere usato per chiamare le classi
    // Questo componente viene lanciato una sola volta, dopo la prima invocazione di render
    // ABBIAMO LA CERTEZZA CHE NON VERRÀ MAI PIÙ ESEGUITO IN AUTOMATICO DA REACT
    this.getPrenotazioni() // <-- Eseguire il metodo qui eviterà di entrare in un loop
  }

  // render() è un metodo che dobbiamo includere obbligatoriamente in tutti i nostri componenti a classe
  // però non 10 invochiamo mai direttamente! 10 invoca solamente React in autonomia per eestire il
  // "disegno" dell'interfaccia

  // Il metodo render() viene invocato automaticamente da react al montaggio del componente
  // e viene automaticamente reinvocato ogni volta che il componente CAMBIA STATO o gli CAMBIANO LE PROPS
  render() {
    //   this.getPrenotazioni() <-- sbagliato
    //   siccome getPrenotazioni è un metodo che recupera i dati ed effettua un setState()
    // il setState() lancia il render e quest'ultimo lancia il getPrenotazioni e viceversa in un loop infinito
    return (
      <Container>
        <Row>
          <Col className="text-center fw-bold mt-3">
            <h3>Amministrazione</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.isLoading ? (
              <Alert variant="info">Caricamente in corso</Alert>
            ) : (
              <Alert variant="success">Caricamento completato</Alert>
            )}
            {this.state.isError && <Alert variant="Danger">Errore nella fetch</Alert>}
            {
              /* // SHORT CIRCUIT 
              UTILE PER IL CONDINTIONAL RENDERING*/
              this.state.isLoading && (
                <div className="text-center">
                  <Spinner animation="grow" variant="info" />
                </div>
              )
            }
            <ListGroup>
              {/* Questa lista rispecchierà l'elenco delle prenotazioni esistenti */}
              {this.state.prenotazioni.map((note) => {
                return (
                  <ListGroup.Item key={note._id}>
                    <span className="d-flex justify-content-between align-items-center">
                      {note.name} per {note.numberOfPeople} il{" "}
                      {new Date(note.dateTime).toLocaleString()}
                      <Button
                        onClick={() => {
                          this.deletePrenotazioni(note._id)
                        }}>
                        🗑️
                      </Button>{" "}
                    </span>
                  </ListGroup.Item>
                )
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default BackOffice

// TIMELINE DEL COMPONENTE BACKOFFICE
// 1) II componente viene disegnato con 1a prima invocazione automatica del metodo render()
// 2) Se c'è, a questo punto, viene invocato anche il metodo componentDidMount()
// 3) In componentDidMount noi abbiamo inserito l'invocazione di getPrenotazioni(), che fa una fetch API
// e riempie 10 stato (setState) del coronente Backoffice con l'array delle prenotazioni a DB
// 4) Poichè è appena avvenuto un setState in getPrenotazioni e secondo le logiche interne di React questo
// provoca una seconda invocazione del metodo render().
