import { Card } from "react-bootstrap"

const MyCard = function (props) {
  console.log(props)
  return (
    <div className="g-3">
      <Card className="p-0 m-0 col h-100">
        <Card.Img className="w-100" variant="top" src={props.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fst-italic">{props.title}</Card.Title>
          <Card.Subtitle className="text-secondary flex-grow-1">{props.category}</Card.Subtitle>
          <Card.Text className="my-2 fw-bold fs-4">{props.price}$</Card.Text>
          <Card.Text style={{ fontSize: "0.75em" }}>{props.asin}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyCard
