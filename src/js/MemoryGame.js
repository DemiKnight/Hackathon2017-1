/**
 * Created by Kryptical on 08/04/2017.
 */
//var canvas = document.getElementById("memoryGame");
// var canvas = document.get

// var ctx = canvas.getContext("2d");

const speed = 1;
let complexity = 5;

let pattern = new Array;

function DrawSquare(canvasElement) {
    var ctx = canvasElement.getContext("2d");

    ctx.beginPath();
    ctx.rect(20,40,50,50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function checkPattern() {

}

function generatePattern() {

    for(index = 0; index < complexity ;index++){
        pattern.add(Math.floor(Math.random() * (7)) + 1)
        pattern[]
    }


}

function buttonPressed(buttonNum){
    //alert('The button ' & buttonNum & ' has been pressed!')
    console.log('The button being pressed is ' + buttonNum.toString())
    let button = document.getElementById("btn" + buttonNum)

    button.style.opacity = 0.5

}
// $(function () {
//     $("button")
//
// })
//
