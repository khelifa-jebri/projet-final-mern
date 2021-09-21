import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  accepteReservation,
  refuseReservation,
  terminateReservation,
} from "../../redux/actions/reservationsActions";

function ReservationItem({ reservation }) {
  const dispatch = useDispatch();

  const handleAccepte = () => {
    console.log("From component : ", reservation.reservation_id);
    dispatch(accepteReservation({ id: reservation.reservation_id }));
  };

  const handleRefuse = () => {
    console.log("From Component : ", reservation.reservation_id);
    dispatch(refuseReservation({ id: reservation.reservation_id }));
  };

  const handleTerminate = () => {
    console.log("From Component : ", reservation.reservation_id);
    dispatch(terminateReservation({ id: reservation.reservation_id }));
  };

  return (
    <tr>
      <td>{reservation.nom_client}</td>
      <td>{reservation.prenom_client}</td>
      <td>{reservation.phone_client}</td>
      <td>{reservation.mat_car}</td>
      <td>{reservation.mark_car}</td>
      <td>{reservation.model_car}</td>
      <td>
        {reservation.reservation_date_debut.substring(0, 19).replace("T", " ")}
      </td>
      <td>
        {reservation.reservation_date_fin.substring(0, 19).replace("T", " ")}
      </td>
      <td>{reservation.reservation_state}</td>
      <td>{reservation.reservation_cost} DT</td>

      {reservation.reservation_state === "in_waiting" ? (
        <td style={{ width: "16%" }}>
          <Button variant="outline-primary" onClick={handleAccepte}>
            Accepter
          </Button>
          <Button variant="outline-danger" onClick={handleRefuse}>
            Refuser
          </Button>
        </td>
      ) : reservation.reservation_state === "in_progress" ? (
        <td style={{ width: "15%" }}>
          <Button variant="outline-success" onClick={handleTerminate}>
            Terminer
          </Button>
        </td>
      ) : (
        <td> </td>
      )}
    </tr>
  );
}

export default ReservationItem;
