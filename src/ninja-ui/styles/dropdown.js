import "./dropdown.css";

const dropdownBtn = document.querySelector(".dropdown-btn");
const content = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
  console.log(event);
});

class dropDown {
  constructor(dropDownbtn) {
    this.dropDownbtn = dropDownbtn;
    this.content = document.querySelector(".dropdown-content");
  }
  init() {
    this.dropDownbtn.addEventListener("click", () => {
      this.dropDownbtn.classList.toggle("rotate");
      this.content.classList.toggle("hidden");
    });
  }
}
export { dropDown as default };
