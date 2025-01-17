const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");

buttonOne.addEventListener("click", function () {
    console.log("Button 1 has been click");
  });

  buttonTwo.addEventListener("click", function (event) {
    console.log("Button 2 has been click");
    console.log(event);
    console.log(event.target);
    console.log(event.target.id);
  });

  function handleClick() {
    console.log("Button 3 has been click");
  }

  buttonThree.addEventListener("click", handleClick);
  