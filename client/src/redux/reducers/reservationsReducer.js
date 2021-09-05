import { GET_RESERVATIONS } from "../constants/actions-types";

const initialState = {
    reservations: [],
};

const reservationsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RESERVATIONS:
            return {
                ...state,
                reservations: payload.data,
            };
        default:
            return state;
    }
};

export default reservationsReducer;