import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomer } from "../../../actions/customer";
import { Modal } from "@mui/material";
import { choose_color_level } from "../../../utils/colors";
import { rupiah } from "../../../helpers/currency";
import ProductTable from "../tables/ProductTable";
import Tags from "../../base/Tags";

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
        <div className="font-quicksand flex flex-col gap-6 rounded-lg absolute bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-11/12  md:w-3/4 lg:w-1/2 shadow-2xl p-4">
          <header className="flex flex-col p-3 bg-[#5D5FEF] text-white rounded-lg">
            <h1 className="font-bold text-xl">Detail Customer</h1>
            <p className="font-satoshi text-xs leading-6 tracking-[1.5%] w-2/5 mt-1">
              Create new customer with these inputs below.
            </p>
          </header>

          <main className="flex flex-col gap-4 w-full ">
            <table>
              <tbody className="text-lg">
                <tr>
                  <td className="w-1/4 py-2 align-top font-semibold min-w-[160px]">
                    Name
                  </td>
                  <td className="py-2 align-top min-w-[10px]">:</td>
                  <td className="py-2 align-top ">{customer.name}</td>
                </tr>
                <tr>
                  <td className="py-2 align-top font-semibold">Level</td>
                  <td className="py-2 align-top ">:</td>
                  <td className="py-2 align-top ">
                    <Tags>{customer.level}</Tags>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 align-top font-semibold">
                    Favorite Menu
                  </td>
                  <td className="py-2 align-top ">:</td>
                  <td className="py-2 align-top ">
                    {customer.favorite_menu || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="py-2 align-top font-semibold">
                    Total Transaction
                  </td>
                  <td className="py-2 align-top ">:</td>
                  <td className="py-2 align-top ">
                    {rupiah(customer.total_transaction)}
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="pt-2 align-top font-semibold">Products</td>
                  <td className="py-2 align-top ">:</td>
                  <td className="py-2 align-top ">
                    {!customer.products ||
                      (customer.products.length == 0 && "No products reserved")}
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="overflow-auto max-h-[300px]">
              {!customer.products ||
                (!customer.products.length == 0 && (
                  <table className="w-full text-center mt-3">
                    <thead className="bg-gray-100 border-b-2">
                      <tr>
                        <th className="border-r-2 min-w-[230px]">Name</th>
                        <th className="border-r-2 min-w-[160px]">Qty</th>
                        <th className="min-w-[90px]">Action</th>
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
                ))}
            </div>
          </main>
        </div>
      </Modal>
    </>
  );
};

export default ModalDetailCustomer;
