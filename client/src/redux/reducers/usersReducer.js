import { GET_USERS } from "../constants/actions-types";

const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload.data,
            };
        default:
            return state;
    }
};

export default usersReducer;