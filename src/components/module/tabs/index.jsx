import React from "react";

const Tabs = () => {
  return (
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
  );
};

export default Tabs;
