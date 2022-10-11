import axios from "axios";

const ACTION_PREFIX = "USER/"

const INIT_LOADING = ACTION_PREFIX + "INIT_LOADING";
const LOADING_DONE = ACTION_PREFIX + "LOADING_DONE";
const LOADING_ERR = ACTION_PREFIX + "LOADING_ERR"

const initialState = {
    isLoading: false,
    loadError: null,
    data: null
};

export const loadUser = () => {
    return async (dispatch) => {
        dispatch({ type: INIT_LOADING });
        try {
            const res = await axios.get("https://fakestoreapi.com/users/1");
            dispatch({
                type: LOADING_DONE,
                payload: res.data
            });

        } catch (e) {
            dispatch({
                type: LOADING_ERR,
                payload: e
            });
        }
    };
};

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case INIT_LOADING:
            return {
                ...state,
                isLoading: true,
                loadError: null,
                data: null,
            };
        case LOADING_DONE:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case LOADING_ERR:
            return {
                ...state,
                isLoading: false,
                loadError: action.payload,
            }
        default:
            return state;
    }
}