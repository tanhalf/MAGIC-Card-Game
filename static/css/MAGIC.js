import {player} from './player.js';
import {draw} from './test.js';
  document.addEventListener("DOMContentLoaded", function() {
    var start = document.getElementById("start");
      //const turn =null;
      
    start.addEventListener("click", async function setup(){
        const response = await fetch("/");
      try{
        if (response.ok){
          console.log("method called successfully! :D")
          await getData();
          await draw();
        } 
        else{
          console.error("didn't work bud.. :/")
        }
      }
      catch(error){
        console.error("sumn wrong gang .. :/");
      }
        
    });
  });



  export async function getData(){

  $(document).ready(function() {
    $.ajax({
      url: '/',
      method: 'POST',
      success: function(response){
        
        var counter = document.getElementById("counter");
        counter.textContent = JSON.parse(response.toString());
        
      },
      error: function(xhr, status, error) {
        console.error('DAYUM:', error);
      }
      
    
    });
  })
  
}


/*
function draw(){
  if (counter >1)
 // hand += random card from deck
}*/
function firstDraw(){
  if (counter ==1){
    count =7;
    while(count >0){
    draw();
    count--;
    }
  }
}