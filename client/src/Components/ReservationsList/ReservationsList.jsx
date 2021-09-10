import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import { getReservations } from "../../redux/actions/reservationsActions";
import { getUsers } from "../../redux/actions/usersActions";
import { FloatingLabel, Form, Table } from "react-bootstrap";

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
    reservations.map((reservation) => {
      const user = users.find((user) => user._id === reservation.client_id);
      const car = cars.find((car) => car._id === reservation.car_id);
      const reservationInf = {
        cin_client: user.cin,
        nom_client: user.firstName,
        prenom_client: user.lastName,
        phone_client: user.phone_number,
        mat_car: car.registration_number,
        mark_car: car.mark,
        model_car: car.model,
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
          <option value="In progress">En cours</option>
          <option value="Accepted">Acceptée</option>
          <option value="Refused">Refusée</option>
        </Form.Select>
      </FloatingLabel>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>CIN</th>
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
          </tr>
        </thead>
        <tbody>
          {selectedReservationState.current.value === ""
            ? reservationsInf.map((r) => (
                <tr key={Math.random()}>
                  <td>{r.cin_client}</td>
                  <td>{r.nom_client}</td>
                  <td>{r.prenom_client}</td>
                  <td>{r.phone_client}</td>
                  <td>{r.mat_car}</td>
                  <td>{r.mark_car}</td>
                  <td>{r.model_car}</td>
                  <td>{r.reservation_date_debut}</td>
                  <td>{r.reservation_date_fin}</td>
                  <td>{r.reservation_state}</td>
                  <td>{r.reservation_cost}</td>
                </tr>
              ))
            : reservationsInf
                .filter(
                  (r) =>
                    r.reservation_state ===
                    selectedReservationState.current.value
                )
                .map((r) => (
                  <tr key={Math.random()}>
                    <td>{r.cin_client}</td>
                    <td>{r.nom_client}</td>
                    <td>{r.prenom_client}</td>
                    <td>{r.phone_client}</td>
                    <td>{r.mat_car}</td>
                    <td>{r.mark_car}</td>
                    <td>{r.model_car}</td>
                    <td>{r.reservation_date_debut}</td>
                    <td>{r.reservation_date_fin}</td>
                    <td>{r.reservation_state}</td>
                    <td>{r.reservation_cost}</td>
                  </tr>
                ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReservationsList;
