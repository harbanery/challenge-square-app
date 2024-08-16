import api from "../services/api";

export const getCustomers = () => async (dispatch) => {
  try {
    const result = await api.get(`customers`);
    if (result.data) {
      dispatch({
        type: "GET_ALL_CUSTOMERS",
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCustomer = (id) => async (dispatch) => {
  try {
    const result = await api.get(`customers/${id}`);
    if (result.data) {
      dispatch({
        type: "GET_DETAIL_CUSTOMER",
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCustomer =
  (data, { close }) =>
  async (dispatch) => {
    dispatch({
      type: "RESPONSE_IDLE",
    });
    try {
      await api.post(`customers`, {
        name: data.name,
        level: data.level,
      });

      dispatch({
        type: "RESPONSE_SUCCESS",
        payload: "Customer created successfully.",
      });

      close();

      dispatch(getCustomers());
    } catch (error) {
      dispatch({
        type: "RESPONSE_ERROR",
        payload: "Create customer failed.",
      });
    }
  };

export const updateCustomerProductQuantity =
  (customerId, productId, quantity, { close }) =>
  async (dispatch) => {
    try {
      await api.put(`customers/${customerId}/products/${productId}`, {
        quantity: quantity,
      });

      dispatch({
        type: "RESPONSE_SUCCESS",
        payload: "Quantity product updated successfully.",
      });

      close();

      dispatch(getCustomers());
    } catch (error) {
      dispatch({
        type: "RESPONSE_ERROR",
        payload: "Quantity product failed.",
      });
    }
  };

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    await api.delete(`customers/${id}`);

    dispatch({
      type: "RESPONSE_SUCCESS",
      payload: "Customer deleted successfully.",
    });

    dispatch(getCustomers());
  } catch (error) {
    dispatch({
      type: "RESPONSE_ERROR",
      payload: "Customer failed to delete.",
    });
  }
};
