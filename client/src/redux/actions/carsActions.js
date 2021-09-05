import { GET_CARS } from "../constants/actions-types";
import axios from "axios";

export const getCars = () => (dispatch) => {
    axios
        .get("/api/cars/allCars")
        .then((response) =>
            dispatch({ type: GET_CARS, payload: response.data })
        )
        .catch((err) => console.log(err));
};