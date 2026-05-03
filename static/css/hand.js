import {deck} from './deck.js';
import {card} from './card.js';

export class hand extends deck{
  #size;
  constructor(){
    super();
    this.#size=0;
  }

  push(card){
    super.push(card);
    this.#size++;
    // const text = document.getElementById("hand");
    // text.textContent = "IN HAND ("+this.getCount()+")";
     this.makecard(card);
  }

  makecard(card){ //use nodes for spacing
    const cardBtn = document.createElement("button");
      cardBtn.textContent = card.getName();
      cardBtn.classList.add("hand");
      cardBtn.id = crypto.randomUUID(); 
      card.setInstanceId(cardBtn.id);

    var cont = document.getElementById("hand-container");
    cont.appendChild(cardBtn);

    let card_type = card.getType();
    var choose_card = document.getElementById(cardBtn.id);
      var actions = document.createElement("div");
      choose_card.appendChild(actions);

    var type = document.createElement("button");

    choose_card.addEventListener("click", function(){
      if(actions.contains(type)){
        actions.removeChild(type);
      }
      else{
        actions.appendChild(type);
      }
    })

    // Object.assign(cardBtn.style,{
    //   position: "relative",
    //   height: "200px",
    //   width: "150px",
    //   marginLeft: "-100px"
    // });
  }

}

// hand_container.addEventListener("click", (e) => {
//   if(e.target.tagName === "BUTTON"){
//     card_type = Card.getType();
//     if(actions.contains(card_type)){
//       actions.removeChild(card_type);
//     }
//     else{
//       actions.appendChild(card_type);
//     }
//   }
// });


