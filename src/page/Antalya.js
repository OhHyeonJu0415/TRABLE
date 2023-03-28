import { getImage } from "../component/getImage.js";

class Antalya {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    const root = document.createElement("div");
    root.classList.add("turkeyContainer");

    root.appendChild(getImage(0, "antalya", "A"));

    root.appendChild(getImage(1, "antalya", "B"));

    root.appendChild(getImage(2, "antalya", "C"));

    for (let i = 3; i < 7; i++) {
      root.appendChild(getImage(i, "antalya"));
    }

    this.$container.appendChild(root);
  }
}

export default Antalya;
