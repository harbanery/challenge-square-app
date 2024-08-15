const initialState = {
  customers: [],
  customer: {},
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CUSTOMERS":
      return {
        ...state,
        customers: action.payload,
      };
    case "GET_DETAIL_CUSTOMER":
      return {
        ...state,
        customer: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducer;
