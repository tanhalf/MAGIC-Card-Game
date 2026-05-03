import {player} from './player.js';
import {hand} from './hand.js';
import {draw_stack} from './draw_stack.js';
import {getData} from './MAGIC.js';
import { card } from './card.js';
import {health_bar} from './health_bar.js';

export async function draw(){
  try{
    const p1 = new player("Darryl");
    p1.healthBar().posHealth(3,20);
    const ds = new draw_stack();
    for(let i = 0; i < 20; i++)
      ds.push(new card());
    var draw = document.getElementById("draw_stack");
    draw.addEventListener("click", async function(){
      const c = await ds.pop();
      p1.hand().push(c);
    })
  }
  catch(error){
    console.error("Player not created",error);
  }

}
