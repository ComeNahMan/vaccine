/*var status = true;
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
 */


 function idCard(personName, expiration) {
   this.name = personName;
   this.expiration = new Date(expiration);
   this.today = new Date();
   this.checkExpiration = function() { 
     var difference = this.today.getTime() - this.expiration.getTime();
     var sign = Math.sign(difference)
     if (sign == -1) {
       return false;
     } else if (sign == 1) {
       return true;
     }
   }
   this.expiration = this.checkExpiration();
 }

 var person1 = new idCard('Freddy Kruger', '2022-04-01');
 var person2 = new idCard('Jack Skellington', '2023-10-05');
 var person3 = new idCard('Santa Claus', '2020-12-25');
 var person4 = new idCard('Lasko Fan', '2024-05-09');



 var idCardArray = [person1, person2, person3, person4];

 function vaxCard(personName, date, vaccined) {
   this.name = personName;
   this.secondShot = new Date(date);
   this.vaccined = vaccined;
   this.getDifference = function() {
     var today = new Date();
     var difference = today.getTime() - this.secondShot.getTime();
     difference = Math.floor(difference / 86400000);
     return difference;
   }


   this.checkVaccine = function(index) {
     var date = this.getDifference();

     var daysUntil = 14 - date;

     if (daysUntil == 1) {
       daysMessage = "one more day";
     } else {
       daysMessage = " days";
     }

     if (idCardArray[index].expiration == false) {
       if (idCardArray[index].name == this.name) {
         if (this.vaccined == true) {
           if (date >= 14) {
             var message = " You're Fully Vaccinated! ";
             return message;
           } else {
             var message = daysUntil + daysMessage + " till you could enter. ";
             return message;
           }
         } else {
           var message = " You're Not Fully Vaccinated.";
           return message;
         }
       } else {
         var message = " Names on both ID and Vaccine card do not match. ";
         return message;
       }
     } else {
       var message = " Your ID is Expired. ";
       return message;
     }
   };

   this.access = function(index) {
     var date = this.getDifference();

     var daysUntil = 14 - date;

     if (daysUntil == 1) {
       daysMessage = "one more day";
     } else {
       daysMessage = " days";
     }

     if (idCardArray[index].expiration == false) {
       if (idCardArray[index].name == this.name) {
         if (this.vaccined == true) {
           if (date >= 14) {
             return "You Can Come In ";
           } else {
             return "Nope";
           }
         } else {
           return "Gone From Here";
         }
       } else {
         return "Rock So";
       }
     } else {
       return "Hardlucks";
     }
   };
 }

 var personVax1 = new vaxCard('Freddy Krueger', '2021-10-01', true);
 var personVax2 = new vaxCard('Jack Skellington', '2021-10-01', true);
 var personVax3 = new vaxCard('Santa Claus', undefined, false);
 var personVax4 = new vaxCard('Lasko Fan', '2021-10-26', true);


 var vaxCardArray = [personVax1, personVax2, personVax3, personVax4];

 var vaxArrayLength = vaxCardArray.length;
 for (var i = 0; i < vaxArrayLength; i++) {
   document.write(idCardArray[i].name,)
   document.write(vaxCardArray[i].checkVaccine(i))
 }
