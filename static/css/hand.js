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
    const text = document.getElementById("hand");
    text.textContent = "IN HAND ("+this.getCount()+")";
    this.makecard(card);
  }

  makecard(card){ //use nodes for spacing
    const cardBtn = document.createElement("button");
    cardBtn.textContent = card.getName();
    var cont = document.getElementById("button-container");
    
    Object.assign(cardBtn.style,{
      position: "relative",
      right: "-130px",
      className: "card",
      height: "200px",
      width: "150px"
    });
    cont.appendChild(cardBtn);
  }
  
}

