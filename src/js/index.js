import _ from "lodash";
import "../css/style.scss";

(function () {
  function generateSnow() {
    const mainContainer = document.getElementById("main-container");
    for (let i = 0; i < 200; i++) {
      const snow = document.createElement("div");
      snow.classList.add("snow");
      document.body.appendChild(snow);
    }
  }
  generateSnow();
})();
