import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomerProductQuantity } from "../../../actions/customer";

const ProductTable = ({ dataProduct = {}, customerId = 0, close }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(dataProduct.quantity);

  const handlePlus = () => {
    setCount((nextNotes) => nextNotes + 1);
  };

  const handleMinus = () => {
    setCount((prevNotes) => prevNotes - 1);
  };

  const handleChangeQuantity = (customerId, productId, quantity) => {
    dispatch(updateCustomerProductQuantity(customerId, productId, quantity));

    close();
  };

  return (
    <tr className=" border-t-2">
      <td className="border-r-2 py-3">{dataProduct.name || "-"}</td>
      <td className="border-r-2 py-3 flex justify-evenly items-center">
        <button
          onClick={handleMinus}
          className="px-3 py-1 rounded-md shadow-md bg-gray-100"
        >
          -
        </button>
        <span className="px-3 py-1 ">{count}</span>
        <button
          onClick={handlePlus}
          className="px-3 py-1 rounded-md shadow-md bg-gray-100"
        >
          +
        </button>
      </td>
      <td className=" py-3">
        <button
          onClick={() =>
            handleChangeQuantity(customerId, dataProduct.id, count)
          }
          className="px-2 py-1"
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default ProductTable;
