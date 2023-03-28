import { getImage } from "../component/getImage.js";

class Cappadocia {
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

    root.appendChild(getImage(0, "cappadocia", "A"));

    root.appendChild(getImage(1, "cappadocia", "B"));

    root.appendChild(getImage(2, "cappadocia", "C"));

    for (let i = 3; i < 10; i++) {
      root.appendChild(getImage(i, "cappadocia"));
    }

    this.$container.appendChild(root);
  }
}

export default Cappadocia;
