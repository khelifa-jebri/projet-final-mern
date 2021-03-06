import { GET_AGENCIES } from "../constants/actions-types";
import axios from "axios";

export const getAgencies = () => (dispatch) => {
  axios
    .get("/api/agencies/allAgencies")
    .then((response) =>
      dispatch({ type: GET_AGENCIES, payload: response.data })
    )
    .catch((err) => console.log(err));
};

export const addAgency = (payload) => (dispatch) => {
  axios
    .post("/api/agencies/addNewAgency", payload.newAgency)
    .then(() => dispatch(getAgencies()))
    .catch((err) => console.log(err));
};
