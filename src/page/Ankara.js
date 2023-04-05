import { imageRender } from "../component/getImage.js";
import { setCheckBox } from "../component/setCheckbox.js";

class Ankara {
  constructor($container) {
    this.$container = $container;
    while ($container.firstChild) {
      $container.removeChild($container.firstChild);
    }
    this.render();
  }

  render() {
    setCheckBox();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    imageRender(9, "ankara", this.$container);
  }
}

export default Ankara;
