export class mana_bar{
  constructor(mana){
    this._mana = mana;
    var width=100;

      var hbc = document.getElementById("health_canvas");
      var bar = hbc.getContext("2d");

      bar.fillStyle="black";
      bar.fillRect(3,30,100,5);

      var red = hbc.getContext("2d");
      red.fillStyle="red";
      red.fillRect(3,30,80,5);

      var health = hbc.getContext("2d");
      health.fillStyle="blue";
      health.fillRect(3,30,width,5);

      bar.strokeStyle = "rgb(255,255,255)";
      bar.lineWidth=1;
      bar.strokeRect(2,29,102,7);
  }
}