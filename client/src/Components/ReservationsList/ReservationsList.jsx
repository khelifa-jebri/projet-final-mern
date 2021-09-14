import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/actions/carsActions";
import {
  getReservations,
  accepteReservation,
  refuseReservation,
  terminateReservation,
} from "../../redux/actions/reservationsActions";
import { getUsers } from "../../redux/actions/usersActions";
import { FloatingLabel, Form, Table, Button } from "react-bootstrap";

function ReservationsList() {
  const selectedReservationState = useRef("");
  const [reservationsInf, setReservationsInf] = useState([]);

  const reservations = useSelector(
    (state) => state.reservationsReducer.reservations
  );

  const cars = useSelector((state) => state.carsReducer.cars);
  const users = useSelector((state) => state.usersReducer.users);

  const dispatch = useDispatch();

  const handleAccepte = (reservation_id) => {
    console.log("From Component", reservation_id);
    dispatch(accepteReservation({ id: reservation_id }));
  };

  const handleRefuse = (reservation_id) => {
    console.log("From Component", reservation_id);
    dispatch(refuseReservation({ id: reservation_id }));
  };

  const handleTerminate = (reservation_id) => {
    console.log("From Component", reservation_id);
    dispatch(terminateReservation({ id: reservation_id }));
  };

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
              ? reservationsInf.map((r) => (
                  <tr key={r.reservation_id}>
                    <td>{r.nom_client}</td>
                    <td>{r.prenom_client}</td>
                    <td>{r.phone_client}</td>
                    <td>{r.mat_car}</td>
                    <td>{r.mark_car}</td>
                    <td>{r.model_car}</td>
                    <td>{r.reservation_date_debut}</td>
                    <td>{r.reservation_date_fin}</td>
                    <td>{r.reservation_state}</td>
                    <td>{r.reservation_cost} DT</td>
                    {r.reservation_state === "in_waiting" ? (
                      <td>
                        <Button
                          variant="outline-primary"
                          onClick={handleAccepte(r.reservation_id)}
                        >
                          Accepter
                        </Button>
                        <Button
                          variant="outline-danger"
                          onClick={handleRefuse(r.reservation_id)}
                        >
                          Refuser
                        </Button>
                      </td>
                    ) : r.reservation_state === "in_progress" ? (
                      <td>
                        <Button
                          variant="outline-success"
                          onClick={handleTerminate(r.reservation_id)}
                        >
                          Terminer
                        </Button>
                      </td>
                    ) : (
                      <td> </td>
                    )}
                  </tr>
                ))
              : reservationsInf
                  .filter(
                    (r) =>
                      r.reservation_state ===
                      selectedReservationState.current.value
                  )
                  .map((r) => (
                    <tr key={r.reservation_id}>
                      <td>{r.nom_client}</td>
                      <td>{r.prenom_client}</td>
                      <td>{r.phone_client}</td>
                      <td>{r.mat_car}</td>
                      <td>{r.mark_car}</td>
                      <td>{r.model_car}</td>
                      <td>{r.reservation_date_debut}</td>
                      <td>{r.reservation_date_fin}</td>
                      <td>{r.reservation_state}</td>
                      <td>{r.reservation_cost} DT</td>
                      {r.reservation_state === "in_waiting" ? (
                        <td>
                          <Button
                            variant="outline-primary"
                            onClick={handleAccepte(r.reservation_id)}
                          >
                            Accepter
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={handleRefuse(r.reservation_id)}
                          >
                            Refuser
                          </Button>
                        </td>
                      ) : r.reservation_state === "in_progress" ? (
                        <td>
                          <Button
                            variant="outline-success"
                            onClick={handleTerminate(r.reservation_id)}
                          >
                            Terminer
                          </Button>
                        </td>
                      ) : (
                        <td> </td>
                      )}
                    </tr>
                  ))}
          </tbody>
        </Table>
      </Form>
    </div>
  );
}

export default ReservationsList;
