document.addEventListener('DOMContentLoaded', function () {
  let blackSquare = true;

  const createRandomColors = function() {
    let numberOne = Math.floor(Math.random() * 255);
    let numberTwo= Math.floor(Math.random() * 255);
    let numberThree= Math.floor(Math.random() * 255);
    return (`rgb(${numberOne}, ${numberTwo}, ${numberThree})`); 
 }

  const createCheckerboard = function() {
    document.body.innerHTML = "";
    for (let i = 0; i < 63; i++) {
      let square = document.createElement("div");
      square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
      if (blackSquare === false) {
        square.style.cssText += (`background-color: ${createRandomColors()}`);
        blackSquare = true;
      } else {
        square.style.cssText += `background-color: ${createRandomColors()}`;
        blackSquare = false;
      }
      document.body.appendChild(square);
  
    }
  }
  // createCheckerboard();
  setInterval(createCheckerboard, 600);

}); 