import { imageRender } from "../component/getImage.js";

class Cappadocia {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    imageRender(10, "cappadocia", this.$container);
  }
}

export default Cappadocia;
