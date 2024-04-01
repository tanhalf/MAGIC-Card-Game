
 class card{
 card(name, type, tap){
  this.tap = tap;
  this.name=name;
  this.type = type;
}}
var button_container = document.getElementById("button-container");
choose_card.addEventListener("click", function(){
  if(actions.contains(atk) && actions.contains(tap)){
   actions.removeChild(atk);
   
  }
  else{
   actions.appendChild(atk);
   
  }
 
 })
  if(card.tap == true){
    if(card.type.equals("land")){
      player.mana+=1;
    }
  }

  var makeCardButton = document.getElementById("Make Card");
 function makeCard(){
  makeCardButton.addEventListener("click", function(){
    var new_card = document.createElement("button");
    button_container.appendChild(new_card);
  })
 }

 //create the card on actuAL WEBSITE