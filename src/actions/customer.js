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

export const createCustomer = (data) => async (dispatch) => {
  try {
    const result = await api.post(`customers`, {
      name: data.name,
      level: data.level,
    });

    dispatch(getCustomers());
  } catch (error) {
    console.log(error);
  }
};

export const updateCustomerProductQuantity =
  (customerId, productId, quantity) => async (dispatch) => {
    try {
      const result = await api.put(
        `customers/${customerId}/products/${productId}`,
        {
          quantity: quantity,
        }
      );

      dispatch(getCustomers());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const result = await api.delete(`customers/${id}`);

    dispatch(getCustomers());
  } catch (error) {
    console.log(error);
  }
};
