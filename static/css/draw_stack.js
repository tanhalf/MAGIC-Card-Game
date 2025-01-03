import {deck} from './deck.js';
import {hand} from './hand.js';
import {card} from './card.js';
export class draw_stack extends deck{
  constructor(){
    super()
  }

  pop(){
    return super.pop();
  }
}

// const ds = new draw_stack();
// for(let i = 0; i < 20; i++)
//   ds.push(new card());
// var draw = document.getElementById("draw_stack");
// draw.addEventListener("click", function(){
//   while(hand.)
//   hand.push(super.pop());
// })