import React from "react";

const AnalyticsSideBar = () => {
  return (
    <aside className="hidden xl:block  max-w-[227px] w-full">
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
          Top Menu <br />
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
  );
};

export default AnalyticsSideBar;
