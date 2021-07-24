const buttonA = document.getElementById("buttona");
const buttonB = document.getElementById("buttonb");
const buttonA0 = document.getElementById("buttona0");
const buttonB0 = document.getElementById("buttonb0");
const buttonA1 = document.getElementById("buttona1");
const buttonB1 = document.getElementById("buttonb1");
const pnt = document.getElementById("pnt");

let point = 50;

buttonA.onclick = function () {
  point += 5;
  pnt.textContent = point;
  buttonA.disabled = true;
};
buttonB.onclick = function () {
  point -= 5;
  pnt.textContent = point;
  buttonB.disabled = true;
};
buttonA0.onclick = function () {
  point += 5;
  pnt.textContent = point;
  buttonA0.disabled = true;
};
buttonB0.onclick = function () {
  point -= 5;
  pnt.textContent = point;
  buttonB0.disabled = true;
};
buttonA1.onclick = function () {
  point += 5;
  pnt.textContent = point;
  buttonA1.disabled = true;
};
buttonB1.onclick = function () {
  point -= 5;
  pnt.textContent = point;
  buttonB1.disabled = true;
};
