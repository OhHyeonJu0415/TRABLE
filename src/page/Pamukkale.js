import { imageRender } from "../component/getImage.js";

class Pamukkale {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    imageRender(7, "pamukkale", this.$container);
  }
}

export default Pamukkale;
