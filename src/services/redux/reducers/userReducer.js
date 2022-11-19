// Store/Reducers/accountReducer.js

const initialState = {
    user: null,
    logged: false,
};

/** Possible actions */
export const SET_USER = 'SET_USER';

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

        default:
            return state;
    }
}
