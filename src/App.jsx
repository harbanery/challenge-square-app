import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, getCustomers } from "./actions/customer";
import { rupiah } from "./helpers/currency";
import { choose_color_level } from "./utils/colors";
import ModalAddCustomer from "./components/module/modals/ModalAddCustomer";
import ModalDetailCustomer from "./components/module/modals/ModalDetailCustomer";
import SideBar from "./components/module/sidebar";
import Tabs from "./components/module/tabs";
import CustomerTable from "./components/module/tables/CustomerTable";
import AnalyticsSideBar from "./components/module/sidebar/analytics";
import SearchBar from "./components/module/searchBar";

function App() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customer);

  const getData = () => {
    dispatch(getCustomers());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-between items-center font-quicksand">
      <SideBar />

      <div className="w-full h-screen p-6">
        <header className="flex flex-col lg:flex-row justify-between w-full border-b border-[#D1D0D366]">
          <div className="w-full pb-6 flex flex-col gap-3">
            <h1 className="font-bold text-2xl tracking-[-2%]">Customer</h1>
            <p className="font-satoshi text-sm tracking-[1%]">
              You can manage and organize your customer and other things here
            </p>
          </div>
          <Tabs />
        </header>

        <main className="flex py-6 gap-6">
          <div className="w-full flex flex-col justify-start">
            <section className="p-3 mb-6 bg-[#5D5FEF] rounded-lg">
              <div className=" text-white mb-2">
                <h1 className="font-bold text-xl">Customer</h1>
                <p className="font-satoshi text-xs leading-6 tracking-[1.5%] w-full sm:w-3/5 lg::w-2/5 mt-1">
                  On this menu you will be able to create, edit, and also delete
                  the customer. Also you can manage it easily.
                </p>
              </div>
              <div className="flex w-full justify-start md:justify-between gap-1 md:gap-4">
                <ModalAddCustomer />
                <SearchBar
                  existCustomers={customers.length != 0 && true}
                  className="hidden md:flex"
                />
                {customers.length != 0 && (
                  <button className="flex justify-center items-center rounded-lg max-w-[45px] xl:max-w-[94px] w-full h-[45px] text-white bg-[#ffffff20]">
                    <div className="flex justify-center gap-1.5">
                      <img
                        className="w-[16px] h-[16px]"
                        src="/src/assets/img/icons/filter.png"
                      />
                      <span className="hidden xl:block font-semibold text-[12px] ">
                        Filter
                      </span>
                    </div>
                  </button>
                )}
                {customers.length != 0 && (
                  <button className="flex justify-center items-center rounded-lg max-w-[45px] xl:max-w-[112px] w-full h-[45px] text-white bg-[#ffffff20]">
                    <div className="flex justify-center gap-1.5">
                      <img
                        className="w-[16px] h-[16px]"
                        src="/src/assets/img/icons/refresh-2.png"
                      />
                      <span className="hidden xl:block font-semibold text-[12px] ">
                        Refresh
                      </span>
                    </div>
                  </button>
                )}
                {customers.length != 0 && (
                  <button className="flex justify-center items-center rounded-lg max-w-[45px] w-full h-[45px] text-white bg-[#ffffff20]">
                    <div className="flex justify-center gap-1.5">
                      <img
                        className="w-[16px] h-[16px]"
                        src="/src/assets/img/icons/printer.png"
                      />
                    </div>
                  </button>
                )}
              </div>
              <SearchBar
                existCustomers={customers.length != 0 && true}
                className="flex md:hidden mt-2"
              />
            </section>

            <CustomerTable customers={customers} />

            {customers.length != 0 && (
              <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0">
                <span className="text-base text-[#98949E]">
                  Showing {customers.length <= 10 ? customers.length : 10} Data
                  Customers
                </span>
                <ul className="flex justify-evenly min-[425px]:justify-center md:justify-end">
                  <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                    <button className="rounded-[4px] flex items-center">
                      <span>&larr;</span>
                      <span className="h-full hidden md:block mx-1">
                        Previous
                      </span>
                    </button>
                  </li>
                  <li className="font-semibold text-black text-sm">
                    <button className="rounded-[4px] shadow-md shadow-[#0000000D] px-4 py-2">
                      1
                    </button>
                  </li>
                  <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                    <button className="rounded-[4px]">2</button>
                  </li>
                  <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                    <button className="rounded-[4px]">3</button>
                  </li>
                  <li className="px-4 py-2">...</li>
                  <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                    <button className="rounded-[4px]">38</button>
                  </li>
                  <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                    <button className="rounded-[4px] flex items-center">
                      <span className="h-full hidden md:block mx-1">Next</span>
                      <span>&rarr;</span>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <AnalyticsSideBar />
        </main>
      </div>
    </div>
  );
}

export default App;
