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
    var cont = document.getElementById("hand-container");
    
    // Object.assign(cardBtn.style,{
    //   position: "relative",
    //   height: "200px",
    //   width: "150px",
    //   marginLeft: "-100px"
    // });
     cont.appendChild(cardBtn);
   }
  
}

