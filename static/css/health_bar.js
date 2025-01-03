export class health_bar{
  #health;
  #x;
  #y;
  
  constructor(health){
    this.#health = health;
    this.#x = 0;
    this.#y = 0;
    var width=120;

    
    this.hbc = document.getElementById("health_canvas");
    this.bar = hbc.getContext("2d");
    this.bar.fillStyle="black";
    this.bar.fillRect(this.#x,this.#y,120,5);

    this.red = this.hbc.getContext("2d");
    red.fillStyle="red";
    red.fillRect(this.#x,this.#y,80,5);

    this.health = this.hbc.getContext("2d");
    health.fillStyle="green";
    health.fillRect(this.#x,this.#y,width,5);

    this.bar.strokeStyle = "rgb(255,255,255)";
    this.bar.lineWidth=1;
    this.bar.strokeRect(this.#x-1,this.#y-1,122,7);
  }

  posHealth(x,y){
    this.#x=x;
    this.#y=y;
    this.bar.fillRect(this.#x-1,this.#y-1,122,7)
    this.red.fillRect(this.#x,this.#y,80,5)
    this.health.fillRect(this.#x,this.#y,width,5)
  
  }
}