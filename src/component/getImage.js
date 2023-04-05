const path = "../../images/";

export const getImage = (num, name, grid = "") => {
  const div = document.createElement("div");
  div.classList.add(`grid${grid}`);
  div.style.backgroundImage = `url(${path}${name}/${name}${num}.png`;

  return div;
};

export const imageRender = (num, name, element) => {
  const root = document.createElement("div");
  root.classList.add("turkeyContainer");

  root.appendChild(getImage(0, name, "A"));

  root.appendChild(getImage(1, name, "B"));

  root.appendChild(getImage(2, name, "C"));

  for (let i = 3; i < num; i++) {
    root.appendChild(getImage(i, name));
  }

  element.appendChild(root);
};
