import React from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import ReserveCar from "../ReserveCar/ReserveCar";

function CarCard({ car, user }) {

  return (
    <div>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Img
          variant="top"
          src="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2016/12/ok-fiatpunto.jpg"
        />
        <Card.Body>
          <Card.Title>
            {car.mark} {car.model}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            N° Immatriculation : {car.registration_number}
          </ListGroupItem>
          <ListGroupItem>Puissance fiscale : {car.power}</ListGroupItem>
          <ListGroupItem>Couleur : {car.color}</ListGroupItem>
          <ListGroupItem>Carburant : {car.fuel_type}</ListGroupItem>
          <ListGroupItem>
            Coût de la location /H: {car.hour_price}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <ReserveCar car={car} user={user}/>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
