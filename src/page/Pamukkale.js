import { getImage } from "../component/getImage.js";

class Pamukkale {
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

    root.appendChild(getImage(0, "pamukkale", "A"));

    root.appendChild(getImage(1, "pamukkale", "B"));

    root.appendChild(getImage(2, "pamukkale", "C"));

    for (let i = 3; i < 7; i++) {
      root.appendChild(getImage(i, "pamukkale"));
    }

    this.$container.appendChild(root);
  }
}

export default Pamukkale;
