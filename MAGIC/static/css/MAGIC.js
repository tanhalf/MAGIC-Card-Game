document.addEventListener("DOMContentLoaded", function() {
var start = document.getElementById("start");
  //const turn =null;
  
  start.addEventListener("click", function(){
    fetch("/")
    .then(response =>{
        if (response.ok){
          console.log("method called successfully! :D")
          getData();
        } else{
          console.error("didn't work bud.. :/")
        }
    })
    .catch(error =>{
      console.error("sumn wrong gang .. :/")
    });
    
  });


function getData(){

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

function draw(){
  if (counter >1)
 // hand += random card from deck
}
function firstDraw(){
  if (counter ==1){
    count =7;
    while(count >0){
    draw();
    count--;
    }
  }
}
});