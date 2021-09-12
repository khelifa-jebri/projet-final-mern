import { GET_RESERVATIONS } from "../constants/actions-types";
import axios from "axios";

export const getReservations = () => (dispatch) => {
  axios
    .get("/api/reservations/allReservations")
    .then((response) =>
      dispatch({ type: GET_RESERVATIONS, payload: response.data })
    )
    .catch((err) => console.log(err));
};

export const addReservation = (payload) => (dispatch) => {
  axios
    .post("/api/reservations/addReservation", payload.newRreservation)
    .then(() => dispatch(getReservations()))
    .catch((err) => console.log(err));
};

export const accepteReservation = (payload) => (dispatch) => {
  axios
    .put(`/api/reservations/acceptReservation/${payload.id}`)
    .then(() => {
      dispatch(getReservations());
      console.log("From store action", payload.id);
    })
    .catch((err) => console.log(err));
};

export const refuseReservation = (payload) => (dispatch) => {
  axios
    .put(`/api/reservations/refuseReservation/${payload.id}`)
    .then(() => {
      dispatch(getReservations());
      console.log("From store action", payload.id);
    })
    .catch((err) => console.log(err));
};

export const terminateReservation = (payload) => (dispatch) => {
  axios
    .put(`/api/reservations/terminateReservation/${payload.id}`)
    .then(() => {
      dispatch(getReservations());
      console.log("From store action", payload.id);
    })
    .catch((err) => console.log(err));
};
