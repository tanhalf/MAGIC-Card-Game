import {deck} from './deck.js';
import {hand} from './hand.js';
import {card} from './card.js';
export class draw_stack extends deck{
  constructor(){
    super()

  }

  async pop(){
    const res = await fetch('/draw');
    const data = await res.json();
    // .then(res => res.json())
    // .then(data => {
      return new card({
        instance_id: null,
        id: data.id,
        name: data.name,
        type: data.type,
        description: data.description,
        value: data.value
      });
    // return super.pop();
  }

}

