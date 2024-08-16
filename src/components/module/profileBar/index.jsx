import React from "react";

const ProfileBar = () => {
  return (
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
  );
};

export default ProfileBar;
