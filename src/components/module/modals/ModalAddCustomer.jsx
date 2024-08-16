import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../../../actions/customer";
import { Modal } from "@mui/material";

const ModalAddCustomer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [customer, setCustomer] = useState({
    name: "",
    level: "Warga",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCustomer = () => {
    dispatch(createCustomer(customer, { close: handleClose }));

    setCustomer({
      name: "",
      level: "Warga",
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex justify-center items-center rounded-lg max-w-[45px] xl:max-w-[186px] w-full h-[45px] text-white bg-[#ffffff20]"
      >
        <div className="flex justify-center items-center gap-1.5">
          <img
            className="w-[16px] h-[16px]"
            src="/src/assets/img/icons/sum.png"
          />
          <span className="hidden xl:block font-semibold text-[12px] ">
            Add New Customer
          </span>
        </div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-add-customer"
        aria-describedby="modal-create-customer"
      >
        <div className="font-quicksand flex flex-col gap-6 rounded-lg absolute bg-white top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-11/12 sm:w-1/2 lg:w-1/4 shadow-2xl p-4">
          <header className="flex flex-col p-3 bg-[#5D5FEF] text-white rounded-lg">
            <h1 className="font-bold text-xl">Add New Customer</h1>
            <p className="font-satoshi text-xs leading-6 tracking-[1.5%] w-2/5 mt-1">
              Create new customer with these inputs below.
            </p>
          </header>

          <main className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1">
              <label className=" font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="rounded-lg border-none"
                name="name"
                value={customer.name}
                onChange={handleChange}
                placeholder="Insert customer name"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className=" font-semibold">Level</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input
                    className=""
                    type="radio"
                    id="warga"
                    name="level"
                    value="Warga"
                    checked={customer.level === "Warga"}
                    onChange={handleChange}
                  />
                  <label className="font-medium" htmlFor="warga">
                    Warga
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="juragan"
                    name="level"
                    value="Juragan"
                    checked={customer.level === "Juragan"}
                    onChange={handleChange}
                  />
                  <label className=" font-medium" htmlFor="juragan">
                    Juragan
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="sultan"
                    name="level"
                    value="Sultan"
                    checked={customer.level === "Sultan"}
                    onChange={handleChange}
                  />
                  <label className=" font-medium" htmlFor="sultan">
                    Sultan
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="konglomerat"
                    name="level"
                    value="Konglomerat"
                    checked={customer.level === "Konglomerat"}
                    onChange={handleChange}
                  />
                  <label className="font-medium" htmlFor="konglomerat">
                    Konglomerat
                  </label>
                </div>
              </div>
            </div>
          </main>

          <footer className="flex gap-2">
            <button
              onClick={handleAddCustomer}
              className="rounded-lg text-white bg-[#5D5FEF] px-4 py-2 font-semibold"
            >
              Create Customer
            </button>
            <button
              onClick={handleClose}
              className="rounded-lg text-red-700 bg-red-200 px-4 py-2"
            >
              Cancel
            </button>
          </footer>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddCustomer;
