/**
 * Created by Kryptical on 08/04/2017.
 */
//var canvas = document.getElementById("memoryGame");
// var canvas = document.get

// var ctx = canvas.getContext("2d");

function DrawSquare(canvasElement) {
    var ctx = canvasElement.getContext("2d");

    ctx.beginPath();
    ctx.rect(20,40,50,50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}


