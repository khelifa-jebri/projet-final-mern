import { GET_CARS } from "../constants/actions-types";
import axios from "axios";

export const getCars = () => (dispatch) => {
  axios
    .get("/api/cars/allCars")
    .then((response) => dispatch({ type: GET_CARS, payload: response.data }))
    .catch((err) => console.log(err));
};

export const editCar = (payload) => (dispatch) => {
  axios
    .put(`/api/cars/updateCar/${payload.id}`, payload.updatedCar)
    .then((response) => {
      dispatch(getCars());
    })
    .catch((err) => alert(err.response.data.msg));
};

export const deleteCar = (payload) => (dispatch) => {
  axios
    .delete(`/api/cars/deleteCar/${payload.id}`)
    .then(() => dispatch(getCars()))
    .catch((err) => console.log(err));
};
