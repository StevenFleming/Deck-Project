$(document).ready(function() {

  var deck = [];
  var suits =["clubs", "diamonds", "spades", "hearts"];
  var numbers =["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];

  suits.forEach(function(suit){
    //console.log(suit);
    numbers.forEach(function(number){
      //console.log(number);
      deck.push(`${number} of ${suit}`);
      $("#deck").append(`<li class="${suit}">${number} of ${suit}</li>`);
    });
  });

  console.log(deck);



  var deck2 = [];

  numbers.forEach(function(number){
    //console.log(suit);
    suits.forEach(function(suit){
      //console.log(number);
      deck2.push(`${number} of ${suit}`);
    });
  });

  console.log(deck2);

});