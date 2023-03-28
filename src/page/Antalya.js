import { imageRender } from "../component/getImage.js";

class Antalya {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    imageRender(7, "antalya", this.$container);
  }
}

export default Antalya;
