var tripInfoButton = document.querySelector(".trip-info");
console.log(tripInfoButton);
var dailyBudget = document.querySelector(".daily-budget");
console.log(dailyBudget);

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accomodation = Number(prompt("What are your accommodation costs?"));
  var numDays = Number(prompt("How many days does your trip last?"));

  calculateDailyBudget(totalBudget, accomodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  var daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

tripInfoButton.addEventListener("click", tripInfo);
