import { toggleMenuContent } from "./menus.js";

const dropdownBtn = document.querySelector("#dd-main-btn");
const dropdownAnotherBtn = document.querySelector("#dd-another-btn");

dropdownBtn.addEventListener("click", (e) => { toggleMenuContent("dd-main-items") });

dropdownAnotherBtn.addEventListener("click", (e) => { toggleMenuContent("dd-another-items") });

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
        openDropdown.classList.add('hidden');
    }
  }
}