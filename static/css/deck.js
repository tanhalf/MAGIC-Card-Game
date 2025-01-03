//import {card} from './card';

export class deck{
  constructor(){
    this._deck = [];
  }

  push(card){
    this._deck.push(card);
  }

  remove(card_id){
    let card = null;
    for(let i = 0; i < this._deck.length; i++)
      if(this._deck[i].getId()===card_id){
        card = this._deck[i];
        this._deck.splice(i,1);
        break;
      }
    return card;
  }

  pop(){
    return this._deck.pop();
  }

  getCount(){
    return this._deck.length;
  }


}

