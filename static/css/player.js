import {health_bar} from './health_bar.js';
import { mana_bar } from './mana_bar.js';
import {hand} from './hand.js';
//import {}
export class player {

constructor(name){
  this._name = name;
  this._health = 20;
  this._mana = 0;
  this._hand = new hand(); 
  this._health_bar = new health_bar(this._health );
  this._mana_bar = new mana_bar(this._mana);
}

handCount(){
  return this._hand.length;
}

health(){
  return this._health;
}

mana(){
  return this._mana;
}

hand(){
  return this._hand;
}


}
var width = 100


var canvas = document.getElementById("canvas");
{/*HEALTH BAR
var bar = canvas.getContext("2d");

bar.fillStyle="black";
bar.fillRect(3,20,100,5);
var red = canvas.getContext("2d");
red.fillStyle="red";
red.fillRect(3,20,80,5);
var health = canvas.getContext("2d");
health.fillStyle="green";
health.fillRect(3,20,width,5);

bar.strokeStyle = "rgb(255,255,255)";
bar.lineWidth=1;
bar.strokeRect(2,19,102,7);
*/}
function attack(dmg){
  health.clearRect(3, 20, 100, 5);
  health.fillRect(3,20,width-dmg,5);
  width = width-dmg;
}
var atk_button = document.getElementById("attack");

atk_button.addEventListener("click",function(){
  attack(10);
});

function heal(heal){
  health.clearRect(3,20,100,5);
  health.fillRect(3,20,width+heal,5);
  width=width+heal;
}

var heal_button = document.getElementById("heal");
heal_button.addEventListener("click",function(){
  heal(10);
});
var container = document.getElementById("button-container");
var choose_card = document.getElementById("card");

var actions = document.createElement("div");
choose_card.appendChild(actions);
var atk = document.createElement("button");
var heal_action = document.createElement("button");
var tap = document.createElement("button");
atk.textContent="ATTACK";
heal_action.textContext="HEAL";
/*
function tap(){
choose_card.addEventListener("click", function(){
  choose_card.style.

});*/
choose_card.addEventListener("click", function(){
  if(actions.contains(atk)){
   actions.removeChild(atk);
   
  }
  else{
   actions.appendChild(atk);
   
  }
 
 })


function inHand(){

}
