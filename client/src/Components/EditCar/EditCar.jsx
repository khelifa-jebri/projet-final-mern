import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editCar } from "../../redux/actions/carsActions";

function EditCar({ car, user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const [updatedCar, setUpdatedCar] = useState({});

  const handleChange = () => {};

  const registration_numberRef = useRef("");
  const markRef = useRef("");
  const modelRef = useRef("");
  const powerRef = useRef("");
  const colorRef = useRef("");
  const fuel_typeRef = useRef("");
  const hour_priceRef = useRef("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const updatedCar = {
      registration_number: registration_numberRef.current.value,
      mark: markRef.current.value,
      model: modelRef.current.value,
      power: powerRef.current.value,
      color: colorRef.current.value,
      fuel_type: fuel_typeRef.current.value,
      hour_price: hour_priceRef.current.value,
      agency_id: car.agency_id,
    };
    dispatch(editCar({ updatedCar, id: car._id }));
    handleClose();
  };

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Editer
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modification de la voiture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Numéro d'immatriculation</Form.Label>
              <Form.Control
                type="text"
                name="registration_number"
                ref={registration_numberRef}
                defaultValue={car.registration_number}
                readOnly="readonly"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Marque</Form.Label>
              <Form.Control
                type="text"
                name="mark"
                ref={markRef}
                defaultValue={car.mark}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Modèle</Form.Label>
              <Form.Control
                type="text"
                name="model"
                ref={modelRef}
                defaultValue={car.model}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Puissance fiscale</Form.Label>
              <Form.Control
                type="text"
                name="power"
                ref={powerRef}
                defaultValue={car.power}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Couleur</Form.Label>
              <Form.Control
                type="text"
                name="color"
                ref={colorRef}
                defaultValue={car.color}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Caburant</Form.Label>
              <Form.Control
                type="text"
                name="fuel_type"
                ref={fuel_typeRef}
                defaultValue={car.fuel_type}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cout de la location /H</Form.Label>
              <Form.Control
                type="text"
                name="hour_price"
                ref={hour_priceRef}
                defaultValue={car.hour_price}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Editer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditCar;
