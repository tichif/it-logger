import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  LOGS_ERROR,
  CLEAR_LOGS,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        loading: false,
        logs: action.payload,
      };
    case ADD_LOG:
      return {
        ...state,
        loading: false,
        logs: [...state.logs, action.payload],
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        loading: false,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
