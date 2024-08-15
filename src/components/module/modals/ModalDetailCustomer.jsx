import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../actions/customer";
import { Modal } from "@mui/material";
import { choose_color_level } from "../../../utils/colors";
import { rupiah } from "../../../helpers/currency";
import ProductTable from "../tables/ProductTable";

const ModalDetailCustomer = ({ customerId = 0 }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { customer } = useSelector((state) => state.customer);

  const getDetailData = (id) => {
    dispatch(getCustomer(id));
  };

  return (
    <>
      <button
        onClick={() => {
          getDetailData(customerId);
          handleOpen();
        }}
        className="px-3 py-1 bg-[#FAFAFA] rounded-md hover:bg-[#c3c2c2]"
      >
        <div className="flex justify-between items-center gap-2">
          <img
            className="w-[12px] h-[12px]"
            src="/src/assets/img/icons/shield-search.png"
          />
          <span>Detail</span>
        </div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-add-customer"
        aria-describedby="modal-create-customer"
      >
        <div className="font-quicksand flex flex-col gap-6 rounded-lg absolute bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-1/2 shadow-2xl p-4">
          <header className="flex flex-col p-3 bg-[#5D5FEF] text-white rounded-lg">
            <h1 className="font-bold text-xl">Detail Customer</h1>
            <p className="font-satoshi text-xs leading-6 tracking-[1.5%] w-2/5 mt-1">
              Create new customer with these inputs below.
            </p>
          </header>

          <main className="flex flex-col gap-4 w-full">
            <table>
              <tbody className="text-lg">
                <tr>
                  <td className="w-1/4 py-2 font-semibold">Name</td>
                  <td>:</td>
                  <td>{customer.name}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Level</td>
                  <td>:</td>
                  <td>
                    <span
                      className={`select-none bg-${choose_color_level(
                        customer.level
                      )}-50 rounded-[4px] px-4 py-1 text-${choose_color_level(
                        customer.level
                      )}-500 hover:text-${choose_color_level(
                        customer.level
                      )}-700`}
                    >
                      {customer.level}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Favorite Menu</td>
                  <td>:</td>
                  <td>{customer.favorite_menu || "-"}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Total Transaction</td>
                  <td>:</td>
                  <td>{rupiah(customer.total_transaction)}</td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="pt-2 font-semibold">Products</td>
                  <td>:</td>
                  <td>
                    {!customer.products ||
                      (customer.products.length == 0 && "No products reserved")}
                  </td>
                </tr>

                {!customer.products ||
                  (!customer.products.length == 0 && (
                    <tr className="">
                      <td colSpan="3">
                        <table className="w-full text-center mt-3">
                          <thead className="bg-gray-100 border-b-2">
                            <tr>
                              <th className="border-r-2">Name</th>
                              <th className="border-r-2">Qty</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {customer.products.map((product) => (
                              <ProductTable
                                key={product.id}
                                dataProduct={product}
                                customerId={customer.id}
                                close={handleClose}
                              />
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </main>
        </div>
      </Modal>
    </>
  );
};

export default ModalDetailCustomer;
