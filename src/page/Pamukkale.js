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
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    imageRender(7, "pamukkale", this.$container);
  }
}

export default Pamukkale;
