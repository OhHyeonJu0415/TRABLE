const path = "../../images/";

export const getImage = (num, name, grid = "") => {
  const div = document.createElement("div");
  div.classList.add(`grid${grid}`);
  div.style.backgroundImage = `url(${path}${name}/${name}${num}.jpg`;

  return div;
};
