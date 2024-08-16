import clsx from "clsx";
import React from "react";

const SearchBar = ({ existCustomers = false, className = "" }) => {
  if (!existCustomers) return false;

  return (
    <div
      className={clsx(
        `justify-between gap-1 items-center bg-white rounded-lg w-full h-[45px] p-1`,
        className
      )}
    >
      <div className="w-[10%] hidden xl:block">
        <img
          className="w-[16px] h-[16px] mx-auto"
          src="/src/assets/img/icons/search-normal.png"
        />
      </div>
      <form className="w-full">
        <input
          className="w-full px-2 xl:px-0 rounded-lg border-none font-medium placeholder:font-medium text-base placeholder:text-base placeholder:text-[#D1D0D3]"
          type="search"
          placeholder="Search Customer"
        />
      </form>
      <button className="max-w-[78px] w-full bg-[#5D5FEF] text-white h-full rounded-lg font-semibold text-sm">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
