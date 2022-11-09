const billInput = document.getElementById("bill-input");

const tipInput = document.getElementById("tip-input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector(".one");
const total = document.querySelector(".num");
const numberPeople = document.querySelector(".number");

let people = Number(number.innerText);
let calBill, tip, amount, sum, personTotal;
const calcBill = () => {
  const calBill = Number(billInput.value);
  console.log(calcBill);

  const tipPer = Number(tipInput.value) / 100;
  console.log(tip);
  const amount = calBill * tipPer;
  const sum = amount + calBill;
  let People = Math.trunc(Math.random() * 10) + 1;

  const personTotal = sum / people;
  total.innerText = `$${personTotal.toFixed(2)}`;
};
calcBill();

const increase = () => {
  people++;
  total.innerText = people;
  number.textContent = people;
  calcBill();
};

const decrease = () => {
  if (people < 1) {
    return;
  }
  people--;
  total.innerText = people;
  number.textContent = people;
  calcBill();
};
