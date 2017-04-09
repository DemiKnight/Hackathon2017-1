/**
 * Created by Kryptical on 08/04/2017.
 */
//var canvas = document.getElementById("memoryGame");
// var canvas = document.get
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
// var ctx = canvas.getContext("2d");

const speed = 1;
let complexity = 5;

let pattern = [1,2,3,4,5,6,7,8,9];

let buttonIDPointer = 1 //When showing the buttons whis will help get the ID, needs to be reset at the end.

function DrawSquare(canvasElement) {
    var ctx = canvasElement.getContext("2d");

    ctx.beginPath();
    ctx.rect(20,40,50,50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

$( document ).ready(function() {
    console.log( "ready!" );
    generatePattern();
});


function checkPattern() {

}

function generatePattern() {

    shuffle(pattern)

    for(index = 0; index < complexity ;index++){



        // window.setTimeout(function () {
        //     $(buttonIDPointer).removeClass('pulseRed').addClass('btn-primary');
        // }, (index+1) * 1000); //This then turns the colour back to it's original

        // pattern.push(Math.floor(Math.random() * (7)) + 1)

        // debugger;

        // buttonIDPointer = '#btn' + pattern[index]

        //document.getElementById('btn' +pattern[index]).style.color = "#ffffff"
        $('#btn' + pattern[index]).removeClass('btn-primary').addClass('pulseRed');

        window.setTimeout(indexPointer(index), (index+1) * 1000); //This then turns the colour back to it's original

    }

    // debugger;


    for(newIndex = 0;(pattern.length-complexity);newIndex++){
        pattern.splice(pattern.length-1,1)
    }
}


function indexPointer(index){
    return function(){
        console.log('Time out for button ' + pattern[index])
        $('#btn' + pattern[index]).removeClass('pulseRed').addClass('btn-primary');
    }
}






function buttonPressed(buttonNum){
    //alert('The button ' & buttonNum & ' has been pressed!')
    console.log('The button being pressed is ' + buttonNum.toString());

    // debugger;

    if(pattern[0] == buttonNum){
        let button = document.getElementById("btn" + buttonNum);

        button.style.opacity = 0.5;

        // debugger;

        if(pattern.length == 1){
            alert('Congratulations! You have won! We will refresh the page to start again :D')
            location.reload();
        }else{
            pattern.splice(0,1)
        }

    }else{
        alert('Unlucky, you seem to have entered the wrong order! Try again.')
        location.reload();
    }

}
// $(function () {
//     $("button")
//
// })
//
