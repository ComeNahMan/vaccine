var status = true;
var name = "Matt";
var prompt = "Welcome "+ name + " You're vaccine card has been recieved!"

var el = document.getElementById('end');

el.textContent = prompt;

var vaxCard = {
  name: "Lasko Fan",
  vaccineType: "Sinopharm",
  sex: "M",
  age: "25",
  fullyVaccined: true,
  secondShot: new Date('nov 6, 2021 12:30:00'),
    findDifference: function(){
      var today = new Date()
      var difference = today.getTime() - vaxCard.secondShot.getTime();
      difference = Math.floor(difference/84600000);
      return difference;
    }
};

var date = vaxCard.findDifference();
var daysUntil = 14 - date;


if(vaxCard.fullyVaccined == true) {
  if(date >=14) {
    var message = document.getElementById("message");
   message.textContent = "You're now Fully Vaccinated!";
  } else {
    var message = document.getElementById("message");
    message.textContent = "There's " + daysUntil + " days left for you to be fully vaccinated.";
  }
} else { var message = document.getElementById("message");
    message.textContent = "You're not fully vaccinated yet gone from here :).";
 }
 
