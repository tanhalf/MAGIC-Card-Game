
 export class card{
  
  constructor(name=null, type=null, tap=false, id = null){
    this._tap = tap;
    this._name=name;
    this._type = type;
    this._id = id;
  }

  getId(){
    return this._id;
  }

  getName(){
    return this._name;
  }

  getType(){
    return this._type;
  }

  getTap(){
    return this._tap;
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