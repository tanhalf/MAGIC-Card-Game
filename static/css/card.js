
 export class card{
  #name;
  #type;
  #description;
  #value;
  #id;
  #instance_id;
  constructor(instance_id = null, id = null, name=null, type=null, description = null, value = 0){
    this.#instance_id = instance_id;
    this.#id = id;
    this.#name = name;
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

  setId(id){
    this.#id = id;
  }

  setInstanceId(instance_id){
    this.#instance_id = instance_id;
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