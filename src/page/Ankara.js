import { getImage } from "../component/getImage.js";

class Ankara {
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

    root.appendChild(getImage(0, "ankara", "B"));

    root.appendChild(getImage(1, "ankara", "A"));

    root.appendChild(getImage(2, "ankara", "C"));

    for (let i = 3; i < 9; i++) {
      root.appendChild(getImage(i, "ankara"));
    }

    this.$container.appendChild(root);
  }
}

export default Ankara;
