import React from "react";
import { Card, Button } from "react-bootstrap";
function CarCard({ car }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://sf1.auto-moto.com/wp-content/uploads/sites/9/2016/12/ok-fiatpunto.jpg"
        />
        <Card.Body>
          <Card.Title>
            {car.mark} {car.model}
          </Card.Title>
          <Card.Text>N° Immatriculation : {car.registration_number}</Card.Text>
          <Card.Text>Puissance fiscale : {car.power}</Card.Text>
          <Card.Text>Couleur : {car.color}</Card.Text>
          <Card.Text>Carburant : {car.fuel_type}</Card.Text>
          <Card.Text>Coût de la location /H: {car.hour_price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
