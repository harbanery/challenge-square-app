import React from "react";
import NavList from "../navList";
import { integrationSectionBar, menuSectionBar } from "../../../utils/constant";
import ProfileBar from "../profileBar";

const SideBar = () => {
  return (
    <aside className="hidden lg:block relative max-w-[200px] w-full border-r border-[#D1D0D366]">
      <div className="fixed top-0 left-0 flex flex-col gap-6 justify-between max-w-[200px] w-full h-screen ">
        <div className="p-6 flex flex-col gap-6 justify-start">
          <div className="">
            <img className="" src="/src/assets/img/brand.png" alt="Logo" />
          </div>
          <div>
            <NavList title="Menu" lists={menuSectionBar} />
            <NavList title="Integration" lists={integrationSectionBar} />
          </div>
        </div>

        <ProfileBar />
      </div>
    </aside>
  );
};

export default SideBar;
