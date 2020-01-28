// Business logic for Ticket

function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
  this.price = 5;
}

Ticket.prototype.calculatePrice = function(ticket){
  ticket.title;
  ticket.time;
  ticket.age;
}

Ticket.prototype.calculateTitle = function(title){
  var newMovies = ["Titanic"];
  if (newMovies.includes(title)) {
    return this.price + 5;
  }
}


$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();

    var title = $("#titles").val();
    var time = $("input:radio[name=movieTimes]:checked").val();
    var age = $("#age").val();

    console.log(title, time, age)

  })







})