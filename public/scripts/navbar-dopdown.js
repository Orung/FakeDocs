const dropdownCaret = document.querySelector(".caret");
// const msgContent = document.querySelector(".msgContent");
// const caret = {
//   state: "close",
//   open: function (e) {
   
//     this.state == "open";
//   },
// };
function setDown(e) {
  //   alert("clicked");
  e.target.nextElementSibling.classList.toggle("openDropDown");
}
dropdownCaret.firstElementChild.addEventListener("click", setDown);
