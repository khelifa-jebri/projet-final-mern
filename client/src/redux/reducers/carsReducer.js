import { GET_CARS } from "../constants/actions-types";

const initialState = {
    cars: [],
};

const carsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CARS:
            return {
                ...state,
                cars: payload.data,
            };
        default:
            return state;
    }
};

export default carsReducer;