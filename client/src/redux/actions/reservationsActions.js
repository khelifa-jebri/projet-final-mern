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