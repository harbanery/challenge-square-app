import React from "react";
import { choose_color_level } from "../../../utils/colors";

const Tags = ({ children = "" }) => {
  return (
    <span
      className={`select-none bg-${choose_color_level(
        children
      )}-50 rounded-[4px] px-6 py-2 text-${choose_color_level(
        children
      )}-500 hover:text-${choose_color_level(children)}-700`}
    >
      {children}
    </span>
  );
};

export default Tags;
