import React from "react";

const NavList = ({ title = "", lists = [] }) => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <h2 className="text-[10px] lg:text-[12px] font-satoshi text-[#98949E]">
        {title}
      </h2>
      <ul className="flex flex-col gap-6">
        {lists.map((list) => (
          <li
            key={list.name}
            className="cursor-pointer select-none flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img src={list.icon_image} />
              <h1
                className={
                  list.active
                    ? "font-bold text-sm lg:text-sm text-[#5D5FEF]"
                    : "font-semibold text-sm lg:text-sm text-[#98949E]"
                }
              >
                {list.name}
              </h1>
            </div>
            {list.notification && (
              <span className=" rounded-full px-2 py-1 bg-gradient-to-br from-[#EEA849] from-0% to-[#F46B45] to-100% text-white text-[10px] ">
                {list.notif_count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
