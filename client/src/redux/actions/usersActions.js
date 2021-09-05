import { GET_USERS } from "../constants/actions-types";
import axios from "axios";

export const getUsers = () => (dispatch) => {
    axios
        .get("/api/users/getAllUsers")
        .then((response) => dispatch({ type: GET_USERS, payload: response.data }))
        .catch((err) => console.log(err));
};