
 export class card{
  #name;
  #type;
  #description;
  #value;
  constructor(name=null, type=null, description = null, value = 0){
    // this.#tap = tap;
    this.#name=name;
    this.#type = type;
    this.#description = description;
    this.#value = value;  
  }

  getName(){
    return this.#name;
  }

  getType(){
    return this.#type;
  }

  setType(type){
    this.#type = type;
  }

}
var button_container = document.getElementById("button-container");
// choose_card.addEventListener("click", function(){
//   if(actions.contains(atk) && actions.contains(tap)){
//    actions.removeChild(atk);
   
//   }
//   else{
//    actions.appendChild(atk);
   
//   }
 
//  })
//   if(card.tap == true){
//     if(card.type.equals("land")){
//       player.mana+=1;
//     }
//   }

//   var makeCardButton = document.getElementById("make card");
//  //function makeCard(){
//   makeCardButton.addEventListener("click", function(){
//     var new_card = document.createElement("button");
//     new_card.textContent = "new card";
//     button_container.appendChild(new_card);
    
//   })
 //}

 //create the card on actuAL WEBSITE