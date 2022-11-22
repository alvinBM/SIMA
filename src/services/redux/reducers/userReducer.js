// Store/Reducers/accountReducer.js

const initialState = {
    user: null,
    logged: false,
    lastId: 0,
};

/** Possible actions */
export const SET_USER = 'SET_USER';
export const SET_LAST_DATA_ID = 'SET_LAST_DATA_ID';

export function userReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case SET_USER:
            if (!action.value) {
                return state;
            } else {
                nextState = {
                    ...state,
                    user_data: action.value.user,
                    isLoggedIn: action.value.logged,
                };

                return nextState || state; //Renvoie state si nextState est undefined
            }
        case SET_LAST_DATA_ID:
            if (!action.value) {
                return state;
            } else {
                nextState = {
                    ...state,
                    lastId: action.value.lastId,
                };

                return nextState || state; //Renvoie state si nextState est undefined
            }

        default:
            return state;
    }
}
