// Business logic for Ticket

function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 5;
}

Ticket.prototype.calculatePrice = function(){

  this.calculateTitle();
  this.calculateTime();
  this.calculateAge();

  return this.price;
}

Ticket.prototype.calculateTitle = function(){
  var newMovies = ["Titanic"];
  if (newMovies.includes(this.title)) {
    return this.price += 5;
  } else {
    return this.price;
  }
}

Ticket.prototype.calculateTime = function(){
  if (this.time == "2pm") {
    return this.price -= 2;
  } else {
    return this.price;
  }
}

Ticket.prototype.calculateAge = function(){
  if (this.age > 60) {
    return this.price -= 2;
  } else {
    return this.price;
  }
}

// User Interface logic
$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();

    var title = $("#titles").val();
    var time = $("input:radio[name=movieTimes]:checked").val();
    var age = $("#age").val();

    var newTicket = new Ticket(title, time, age);

    var finalPrice = newTicket.calculatePrice();

    $("#ticketPrice").text("Final Price: $" + finalPrice);

    

  })







})