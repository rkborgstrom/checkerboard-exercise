document.addEventListener('DOMContentLoaded', function() {
let blackSquare = true;

function createCheckerboard () {
  for (let i = 0; i < 63; i++) {
    let square = document.createElement("div");
    square.style.cssText="width: 11.1%; float: left; padding-bottom: 11.1%;";
    if (blackSquare===false) {
      square.style.cssText += 'background-color: red;';
      blackSquare = true; 
    } else {
      square.style.cssText += 'background-color: black;';
      blackSquare = false;
    }
    document.body.appendChild(square);
    console.log(true);
  }
}
createCheckerboard();
});