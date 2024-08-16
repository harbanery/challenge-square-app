const initialState = {
  alert: {
    status: "idle",
    message: "",
    count: 0,
  },
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESPONSE_IDLE":
      return {
        ...state,
        alert: {
          status: "idle",
          message: "",
          count: 0,
        },
      };
    case "RESPONSE_SUCCESS":
      return {
        ...state,
        alert: {
          status: "success",
          message: action.payload,
          count: state.alert.count + 1,
        },
      };
    case "RESPONSE_ERROR":
      return {
        ...state,
        alert: {
          status: "error",
          message: action.payload,
          count: state.alert.count + 1,
        },
      };
    default:
      return state;
  }
};

export default responseReducer;
