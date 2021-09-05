import { GET_AGENCIES } from "../constants/actions-types";

const initialState = {
    agencies: [],
};

const agenciesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_AGENCIES:
            return {
                ...state,
                agencies: payload.data,
            };
        default:
            return state;
    }
};

export default agenciesReducer;