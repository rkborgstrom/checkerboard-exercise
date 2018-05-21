document.addEventListener('DOMContentLoaded', function() {
  const createRandomColors = function() {
    let numberOne = Math.floor(Math.random() * 255);
    let numberTwo = Math.floor(Math.random() * 255);
    let numberThree = Math.floor(Math.random() * 255);
    return (`rgb(${numberOne}, ${numberTwo}, ${numberThree})`);
  }
  let number = 0;
  const numbersInSquares = function() {
    number++;
    return number;
  }
  const createCheckerboard = function() {
    document.body.innerHTML = "";
    for (let i = 0; i < 63; i++) {
      let square = document.createElement("div");
      square.style.cssText = "width: 11.1%; float: left; padding-bottom: 11.1%;";
      square.innerHTML = numbersInSquares();
      square.style.cssText += (`background-color: ${createRandomColors()}`);
      document.body.appendChild(square);

    }
  }
  // createCheckerboard();
  setInterval(createCheckerboard, 400);

});
