import "./dropdown.css";

class dropDown {
  constructor(dropDown) {
    this.dropDown = dropDown;
    this.dropDownbtn = document.querySelector(".dropdown-btn");
    this.content = document.querySelector(".dropdown-content");
  }
  init() {
    this.dropDown.addEventListener("click", () => {
      this.dropDownbtn.classList.toggle("rotate");
      this.content.classList.toggle("hidden");
    });
  }
}
export { dropDown as default };
