let randomNumber = Math.floor(Math.random() * 100); //0-99
let money = 1000;
let moneyLabel = document.getElementById("money");
moneyLabel.innerText = money + "$";

function onClick() {
  money = money - 100;
  moneyLabel.innerText = money + "$";
  let userNumber = +document.getElementById("number").value;

  let h1 = document.getElementById("output");
  h1.style.color = "white";

  if (userNumber == randomNumber) {
    h1.innerHTML = "☺ Ju fituat " + money + "$☺";
  }
  if (userNumber > randomNumber) {
    h1.innerText = "The number is lower than: " + userNumber;
  }

  if (userNumber < randomNumber) {
    h1.innerText = "The number is higher than: " + userNumber;
  }
  if (money <= 0) {
    onRestart();
  }
}

function onRestart() {
  money = 1000;
  moneyLabel.innerText = money + "$";
  randomNumber = Math.floor(Math.random() * 100); //0-99
  let userInput = document.getElementById("number"); //<input></input>
  userInput.value = "";
  let output = document.getElementById("output");
  output.innerText = "";
}
