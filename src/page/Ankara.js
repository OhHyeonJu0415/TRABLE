import { imageRender } from "../component/getImage.js";

class Ankara {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    imageRender(9, "ankara", this.$container);
  }
}

export default Ankara;
