import React, { useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addReservation } from "../../redux/actions/reservationsActions";

function ReserveCar({ car, user }) {
  const dispatch = useDispatch();

  const initialRevervationState = {
    car_id: car._id,
    client_id: user._id,
  };

  const [newRreservation, setNewReservation] = useState(
    initialRevervationState
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewReservation({ ...newRreservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addReservation({ newRreservation }));
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reserver
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            Reservation de la voiture {car.mark} {car.model} :{" "}
            {car.registration_number}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Date et Heure de début</Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="start_date"
                  required={true}
                  autoComplete="start_date"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEndDate">
                <Form.Label>Date et Heure de Fin </Form.Label>
                <Form.Control
                  type="datetime-local"
                  name="end_date"
                  required={true}
                  autoComplete="end_date"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReserveCar;
