import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import { getReservations } from "../../redux/actions/reservationsActions";
import { getUsers } from "../../redux/actions/usersActions";
import { FloatingLabel, Form, Table } from "react-bootstrap";
import ReservationItem from "../ReservationItem/ReservationItem";

function ReservationsList() {
  const selectedReservationState = useRef("");
  const [reservationsInf, setReservationsInf] = useState([]);

  const reservations = useSelector(
    (state) => state.reservationsReducer.reservations
  );

  const cars = useSelector((state) => state.carsReducer.cars);
  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const handleChange = () => {
    let arrayReservation = [];
    // eslint-disable-next-line
    reservations.map((reservation) => {
      const user = users.find((user) => user._id === reservation.client_id);
      const car = cars.find((car) => car._id === reservation.car_id);
      const reservationInf = {
        nom_client: user.firstName,
        prenom_client: user.lastName,
        phone_client: user.phone_number,
        mat_car: car.registration_number,
        mark_car: car.mark,
        model_car: car.model,
        reservation_id: reservation._id,
        reservation_date_debut: reservation.start_date,
        reservation_date_fin: reservation.end_date,
        reservation_state: reservation.state,
        reservation_cost: reservation.cost,
      };
      arrayReservation.push(reservationInf);
    });
    setReservationsInf(arrayReservation);
  };

  useEffect(() => {
    dispatch(getCars());
    dispatch(getReservations());
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ margin: "5%" }}>
      <Form>
        <FloatingLabel
          controlId="floatingSelect"
          label="Choisissez l'état de la réservation"
        >
          <Form.Select
            aria-label="Floating label select example"
            ref={selectedReservationState}
            onChange={handleChange}
          >
            <option value="">...</option>
            <option value="in_waiting">En attente</option>
            <option value="in_progress">En cours</option>
            <option value="terminated">Terminée</option>
            <option value="refused">Refusée</option>
          </Form.Select>
        </FloatingLabel>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>N° Tel</th>
              <th>N° Matriculation</th>
              <th>Marque</th>
              <th>Modéle</th>
              <th>Date de début</th>
              <th>Date de fin</th>
              <th>Etat</th>
              <th>Cout</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedReservationState.current.value === ""
              ? reservationsInf.map((reservation) => (
                  <ReservationItem
                    reservation={reservation}
                    key={reservation.reservation_id}
                  />
                ))
              : reservationsInf
                  .filter(
                    (reservation) =>
                      reservation.reservation_state ===
                      selectedReservationState.current.value
                  )
                  .map((reservation) => (
                    <ReservationItem
                      reservation={reservation}
                      key={reservation.reservation_id}
                    />
                  ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
}

export default ReservationsList;
