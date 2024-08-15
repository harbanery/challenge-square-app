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

export const choose_color_level = (level = "") => {
  const index = level_color_choice.findIndex(
    (levelCustomer) => levelCustomer.level.toLowerCase() == level.toLowerCase()
  );

  if (index == -1) {
    return "black";
  }
  return level_color_choice[index].color;
};
