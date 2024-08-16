import React from "react";
import { choose_color_level } from "../../../utils/colors";
import { rupiah } from "../../../helpers/currency";
import ModalDetailCustomer from "../modals/ModalDetailCustomer";
import { useDispatch } from "react-redux";
import { deleteCustomer, getCustomers } from "../../../actions/customer";
import Tags from "../../base/Tags";

const CustomerTable = ({ customers = [] }) => {
  const dispatch = useDispatch();

  const handleDeleteCustomer = (id) => {
    dispatch(deleteCustomer(id));

    dispatch(getCustomers());
  };

  return (
    <section className="w-full mb-12 overflow-auto">
      {customers.length == 0 ? (
        <h1 className="text-center font-bold text-2xl">
          No Customers Available
        </h1>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAFA] rounded-lg text-sm text-[#98949E]">
              <th className="p-[10px] min-w-[160px]">
                <div className="flex justify-between items-center gap-2 mb-6">
                  <span className="font-medium text-left">Customer Name</span>
                  <img
                    className="w-[17px] h-[20px]"
                    src="/src/assets/img/icons/sorting.png"
                  />
                </div>
              </th>
              <th className="p-[10px] min-w-[160px]">
                <div className="flex justify-between items-center gap-2 mb-6">
                  <span className="font-medium text-left">Level</span>
                  <img
                    className="w-[17px] h-[20px]"
                    src="/src/assets/img/icons/sorting.png"
                  />
                </div>
              </th>
              <th className="p-[10px] min-w-[160px]">
                <div className="flex justify-between items-center gap-2 mb-6">
                  <span className="font-medium text-left">Favorite Menu</span>
                  <img
                    className="w-[17px] h-[20px]"
                    src="/src/assets/img/icons/sorting.png"
                  />
                </div>
              </th>
              <th className="p-[10px] min-w-[160px]">
                <div className="flex justify-between items-center gap-2 mb-6">
                  <span className="font-medium text-left">
                    Total Transaction
                  </span>
                  <img
                    className="w-[17px] h-[20px]"
                    src="/src/assets/img/icons/sorting.png"
                  />
                </div>
              </th>
              <th className="p-[10px] min-w-[160px]">
                <div className="flex mb-6">
                  <span className="font-medium text-left">Action</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="text-sm text-[#110D17] h-[49px]">
                <td className="p-[10px] font-semibold">{customer.name}</td>
                <td className="font-semibold">
                  <Tags>{customer.level}</Tags>
                </td>
                <td className="p-[10px] font-semibold">
                  {customer.favorite_menu || `-`}
                </td>
                <td className="p-[10px] font-semibold">
                  {rupiah(customer.total_transaction)}
                </td>
                <td>
                  <div className="flex justify-between gap-1">
                    <ModalDetailCustomer customerId={customer.id} />
                    <button className="px-3 py-1 bg-[#FAFAFA] rounded-md">
                      <div>
                        <img src="/src/assets/img/icons/edit-2.png" />
                      </div>
                    </button>
                    <button
                      onClick={() => handleDeleteCustomer(customer.id)}
                      className="px-3 py-1 bg-[#FEF5F6] hover:bg-red-200 rounded-md"
                    >
                      <div>
                        <img src="/src/assets/img/icons/trash.png" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CustomerTable;
