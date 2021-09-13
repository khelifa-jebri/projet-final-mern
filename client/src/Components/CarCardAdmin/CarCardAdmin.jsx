import React from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import EditCar from "../EditCar/EditCar";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/actions/carsActions";

function CarCardAdmin({ car, user }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCar({ id: car._id }));
  };
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
          {car.is_available === true ? (
            <ListGroupItem> Disponible : Oui </ListGroupItem>
          ) : (
            <ListGroupItem> Disponible : Nom </ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <EditCar car={car} user={user} />
            <Button variant="danger" onClick={handleDelete}>
              Supprimer
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCardAdmin;
