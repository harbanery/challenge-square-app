import { useState } from "react";
import "./App.css";

function App() {
  const rupiah = (number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const integrationSectionBar = [
    {
      icon_image: "/src/assets/img/icons/shopping-cart.png",
      name: "Stock",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/truck.png",
      name: "Supply",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
  ];

  const menuSectionBar = [
    {
      icon_image: "/src/assets/img/icons/category-2.png",
      name: "Dashboard",
      url: "",
      active: false,
      notification: true,
      notif_count: 4,
    },
    {
      icon_image: "/src/assets/img/icons/battery-full.png",
      name: "Stock",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/profile-2user.png",
      name: "Customer",
      url: "",
      active: true,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/reserve.png",
      name: "Restaurant",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/mouse-square.png",
      name: "Design",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/document-normal.png",
      name: "Report",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/user-square.png",
      name: "Role & Admin",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
    {
      icon_image: "/src/assets/img/icons/candle.png",
      name: "Settings",
      url: "",
      active: false,
      notification: false,
      notif_count: 0,
    },
  ];

  const customer_data = [
    {
      id: 1,
      name: "Odis Rhinehart",
      level: "Warga",
      fav_menu: "Chicken & Ribs Combo",
      total_transaction: 194700,
    },
    {
      id: 2,
      name: "Serenity Fisher",
      level: "Juragan",
      fav_menu: "Fried Chicken Dinne",
      total_transaction: 1040920,
    },
    {
      id: 3,
      name: "Brooklyn Warren",
      level: "Sultan",
      fav_menu: "Surf & Turf Gift Basket",
      total_transaction: 730500,
    },
    {
      id: 4,
      name: "Cristofer Vetrova",
      level: "Konglomerat",
      fav_menu: "Shaking Beef Tri-Tip",
      total_transaction: 467500,
    },
    {
      id: 5,
      name: "Odis Rhinehart",
      level: "Warga",
      fav_menu: "Chicken & Ribs Combo",
      total_transaction: 194700,
    },
    {
      id: 6,
      name: "Serenity Fisher",
      level: "Juragan",
      fav_menu: "Fried Chicken Dinne",
      total_transaction: 1040920,
    },
    {
      id: 7,
      name: "Brooklyn Warren",
      level: "Sultan",
      fav_menu: "Surf & Turf Gift Basket",
      total_transaction: 730500,
    },
    {
      id: 8,
      name: "Cristofer Vetrova",
      level: "Konglomerat",
      fav_menu: "Shaking Beef Tri-Tip",
      total_transaction: 467500,
    },
  ];

  const level_color_choice = [
    {
      level: "warga",
      color: "yellow",
    },
    {
      level: "juragan",
      color: "blue",
    },
    {
      level: "sultan",
      color: "green",
    },
    {
      level: "konglomerat",
      color: "purple",
    },
  ];

  const choose_color_level = (level) => {
    const index = level_color_choice.findIndex(
      (levelCustomer) =>
        levelCustomer.level.toLowerCase() == level.toLowerCase()
    );

    return level_color_choice[index].color;
  };

  return (
    <div className="flex justify-between items-center font-quicksand">
      <aside className="flex flex-col gap-6 justify-between  max-w-[200px] w-full h-screen border-r border-[#D1D0D366]">
        <div className="p-6 flex flex-col gap-6 justify-start">
          <div className="">
            <img className="" src="/src/assets/img/brand.png" alt="Logo" />
          </div>
          <div>
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="text-[10px] lg:text-[12px] font-satoshi text-[#98949E]">
                Menu
              </h2>
              <ul className="flex flex-col gap-6">
                {menuSectionBar.map((menu) => (
                  <li className="cursor-pointer select-none flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={menu.icon_image} />
                      <h1
                        className={
                          menu.active
                            ? "font-bold text-sm lg:text-sm text-[#5D5FEF]"
                            : "font-semibold text-sm lg:text-sm text-[#98949E]"
                        }
                      >
                        {menu.name}
                      </h1>
                    </div>
                    {menu.notification && (
                      <span className=" rounded-full px-2 py-1 bg-gradient-to-br from-[#EEA849] from-0% to-[#F46B45] to-100% text-white text-[10px] ">
                        {menu.notif_count}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="text-[10px] lg:text-[12px] font-satoshi text-[#98949E]">
                Integration
              </h2>
              <ul className="flex flex-col gap-6">
                {integrationSectionBar.map((menu) => (
                  <li className="cursor-pointer select-none flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={menu.icon_image} />
                      <h1
                        className={
                          menu.active
                            ? "font-bold text-sm lg:text-sm text-[#5D5FEF]"
                            : "font-semibold text-sm lg:text-sm text-[#98949E]"
                        }
                      >
                        {menu.name}
                      </h1>
                    </div>
                    {menu.notification && (
                      <span className=" rounded-full px-2 py-1 bg-gradient-to-br from-[#EEA849] from-0% to-[#F46B45] to-100% text-white text-[10px] ">
                        {menu.notif_count}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D1D0D366]">
          <div className="p-6 flex flex-col gap-4">
            <div className="flex justify-between">
              <img
                className="max-w-[36px] max-h-[36px] w-full h-full"
                src="/src/assets/img/profile_avatar.png"
                alt="Avatar"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold text-sm text-[#110D17] tracking-[-1%]">
                  Savannah N
                </h1>
                <span className="font-satoshi font-normal text-[10px] text-[#98949E] tracking-[1.5%]">
                  Food Quality Manager
                </span>
              </div>
            </div>
            <button className="w-full rounded-[4px] p-2 bg-[#FEF5F6]">
              <div className="flex justify-center gap-2">
                <img src="/src/assets/img/icons/logout.png" />
                <span className="font-semibold text-[12px] ">Logout</span>
              </div>
            </button>
          </div>
        </div>
      </aside>

      <div className="w-full h-screen p-6">
        <header className="flex justify-between w-full border-b border-[#D1D0D366]">
          <div className="w-full pb-6 flex flex-col gap-3">
            <h1 className="font-bold text-2xl tracking-[-2%]">Customer</h1>
            <p className="font-satoshi text-sm tracking-[1%]">
              You can manage and organize your customer and other things here
            </p>
          </div>
          <ul className="w-full flex justify-between items-end gap-4">
            <li className="w-full cursor-pointer select-none text-center h-[45px]  font-bold text-sm text-[#5D5FEF] border-b-2 border-[#5D5FEF]">
              Customer
            </li>
            <li className="w-full cursor-pointer select-none text-center h-[45px]  font-semibold text-sm text-[#98949E] hover:text-[#5D5FEF] hover:border-b-2 hover:border-[#5D5FEF]">
              Promo
            </li>
            <li className="w-full cursor-pointer select-none text-center h-[45px]  font-semibold text-sm text-[#98949E] hover:text-[#5D5FEF] hover:border-b-2 hover:border-[#5D5FEF]">
              Voucher
            </li>
          </ul>
        </header>

        <main className="flex py-6 gap-6">
          <div className="w-full flex flex-col justify-between">
            <section className="p-3 mb-6 bg-[#5D5FEF] rounded-lg">
              {/* <img
                className="w-28 h-auto"
                src="https://s3-alpha-sig.figma.com/img/495b/32b6/5ec6f933a07750c51d856991551d9cb9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KmiTkrWY3DcMtv5FZeQH-lcLDcziMZvUKUYyNfLFYm8LcBtCTngLrpvbexu0ZcLeEu-YYh3G922y6TGqGCMhCkxDrMeZFm7FOdkeoaxalOu2fB2BtT0KZXFzMiNXb0s~a5FzyVUUMRi0g3j1emiDMI1KelwkITVu3VOuY-TkINjYvsIRNBWtFumsptQiAgN5PlcJLfJwGevUBxJ2K3IpvkkeUD6di4Sjyb~yO1TRlribm~EWJBCrtVWgtcUyaF-tKSbYTG34LIQCEuqzuX8IBZ9ATbFKzvwjsWWKZ~vgFEgXcEm7FZr~DmRmbR2AWywbiVFl46hUh8z9IBVkE9ijBQ__"
                alt=""
              /> */}
              <div className=" text-white mb-2">
                <h1 className="font-bold text-xl">Customer</h1>
                <p className="font-satoshi text-xs leading-6 tracking-[1.5%] w-2/5 mt-1">
                  On this menu you will be able to create, edit, and also delete
                  the customer. Also you can manage it easily.
                </p>
              </div>
              <div className="flex w-full justify-between gap-4">
                <button className="flex justify-center items-center rounded-lg max-w-[186px] w-full h-[45px] text-white bg-[#ffffff20]">
                  <div className="flex justify-center gap-1.5">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/src/assets/img/icons/sum.png"
                    />
                    <span className="font-semibold text-[12px] ">
                      Add New Customer
                    </span>
                  </div>
                </button>
                <div className="flex justify-between items-center bg-white rounded-lg w-full h-[45px] p-1">
                  <div className="w-1/6">
                    <img
                      className="w-[16px] h-[16px] mx-auto"
                      src="/src/assets/img/icons/search-normal.png"
                    />
                  </div>
                  <form className="w-full">
                    <input
                      className="w-full placeholder:font-medium placeholder:text-xs placeholder:text-[#D1D0D3]"
                      type="search"
                      placeholder="Search Customer"
                    />
                  </form>
                  <button className="max-w-[78px] w-full bg-[#5D5FEF] text-white h-full rounded-lg font-semibold text-sm">
                    Search
                  </button>
                </div>
                <button className="flex justify-center items-center rounded-lg max-w-[94px] w-full h-[45px] text-white bg-[#ffffff20]">
                  <div className="flex justify-center gap-1.5">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/src/assets/img/icons/filter.png"
                    />
                    <span className="font-semibold text-[12px] ">Filter</span>
                  </div>
                </button>
                <button className="flex justify-center items-center rounded-lg max-w-[112px] w-full h-[45px] text-white bg-[#ffffff20]">
                  <div className="flex justify-center gap-1.5">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/src/assets/img/icons/refresh-2.png"
                    />
                    <span className="font-semibold text-[12px] ">Refresh</span>
                  </div>
                </button>
                <button className="flex justify-center items-center rounded-lg max-w-[45px] w-full h-[45px] text-white bg-[#ffffff20]">
                  <div className="flex justify-center gap-1.5">
                    <img
                      className="w-[16px] h-[16px]"
                      src="/src/assets/img/icons/printer.png"
                    />
                  </div>
                </button>
              </div>
            </section>

            <section className="w-full mb-12">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAFA] rounded-lg text-sm text-[#98949E]">
                    <th className="p-[10px]">
                      <div className="flex justify-between gap-2 mb-6">
                        <span className="font-medium">Customer Name</span>
                        <img src="/src/assets/img/icons/sorting.png" />
                      </div>
                    </th>
                    <th className="p-[10px]">
                      <div className="flex justify-between gap-2 mb-6">
                        <span className="font-medium">Level</span>
                        <img src="/src/assets/img/icons/sorting.png" />
                      </div>
                    </th>
                    <th className="p-[10px]">
                      <div className="flex justify-between gap-2 mb-6">
                        <span className="font-medium">Favorite Menu</span>
                        <img src="/src/assets/img/icons/sorting.png" />
                      </div>
                    </th>
                    <th className="p-[10px]">
                      <div className="flex justify-between gap-2 mb-6">
                        <span className="font-medium">Total Transaction</span>
                        <img src="/src/assets/img/icons/sorting.png" />
                      </div>
                    </th>
                    <th className="p-[10px]">
                      <div className="flex mb-6">
                        <span className="font-medium">Action</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customer_data.map((customer) => (
                    <tr
                      key={customer.id}
                      className="text-sm text-[#110D17] h-[49px]"
                    >
                      <td className="p-[10px] font-semibold">
                        {customer.name}
                      </td>
                      <td className="font-semibold">
                        <span
                          className={`select-none bg-${choose_color_level(
                            customer.level
                          )}-50 rounded-[4px] px-6 py-2 text-${choose_color_level(
                            customer.level
                          )}-500 hover:text-${choose_color_level(
                            customer.level
                          )}-700`}
                        >
                          {customer.level}
                        </span>
                      </td>
                      <td className="p-[10px] font-semibold">
                        {customer.fav_menu}
                      </td>
                      <td className="p-[10px] font-semibold">
                        {rupiah(customer.total_transaction)}
                      </td>
                      <td>
                        <div className="flex justify-between gap-1">
                          <button className="px-3 py-1 bg-[#FAFAFA]">
                            <div className="flex justify-between items-center gap-2">
                              <img
                                className="w-[12px] h-[12px]"
                                src="/src/assets/img/icons/shield-search.png"
                              />
                              <span>Detail</span>
                            </div>
                          </button>
                          <button className="px-3 py-1 bg-[#FAFAFA]">
                            <div>
                              <img src="/src/assets/img/icons/edit-2.png" />
                            </div>
                          </button>
                          <button className="px-3 py-1 bg-[#FEF5F6]">
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
            </section>

            <div className="flex justify-between">
              <span className="text-base text-[#98949E]">
                Showing 10 Data Customers
              </span>
              <ul className="flex">
                {/* <li className="font-semibold text-[#6D6D6D] text-sm px-4 py-2">
                  <button className="rounded-[4px]">&larr; Previous </button>
                </li> */}
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
                  <button className="rounded-[4px]">Next &rarr;</button>
                </li>
              </ul>
            </div>
          </div>

          <aside className="max-w-[227px] w-full">
            <div className="w-full rounded-lg p-4 flex flex-col justify-between items-start gap-12 bg-[#5D5FEF] max-h-[265px]">
              <h1 className="font-semibold text-xl text-white leading-[30px] tracking-[-2%]">
                See analytics of the Customer Clearly
              </h1>
              <button className="rounded-lg text-white bg-[#FFFFFF33] px-4 py-2">
                See Analytics
              </button>
            </div>
            <div className="flex flex-col gap-6 p-4">
              <h1 className="font-bold text-[#110D17] text-2xl tracking-[-2%] leading-[28.8px]">
                Top Menu <br />{" "}
                <span className="text-[#F17300]">This Week</span>
              </h1>
              <span className="font-satoshi text-xs text-[#98949E]">
                10-12 Agustus 2023
              </span>
              <ol className="flex flex-col gap-3 font-semibold text-xs leading-[18px] tracking-[-1%] text-[#98949E]">
                <li className="relative rounded-lg p-[10px] font-bold text-sm text-black leading-[21px] tracking-[-1%] shadow-md shadow-[#0000000D]">
                  <div className="absolute top-0 right-0 bg-[#F17300] px-2 py-px rotate-[8deg] text-white shadow-[2px_2px_0px_0px_#464646]">
                    1
                  </div>
                  Nasi Goreng Jamur Special Resto Pak Min
                </li>
                <li className="p-[10px] h-[38px]">2. Tang Seng Sapi Gurih</li>
                <li className="p-[10px] h-[38px]">3. Nasi Gudeg Telur Ceker</li>
                <li className="p-[10px] h-[38px]">4. Nasi Ayam Serundeng</li>
                <li className="p-[10px] h-[38px]">5. Nasi Goreng Seafood</li>
              </ol>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;
