

/*dic num*/
var num = 0;
/*Dic Clikced*/
var clicked = false;

var currPos = 0;
var step = 49.5;
var currcolor = "";
var NumOfPaw = "";
// var num = 0;
// var clicked = false;
var currpawn = "";
var allcolor = ["red", "blue", "green", "yellow"];
var pawnOut = {red:0,blue:0,green:0,yellow:0}









// function ResetPawn(victim) {
//     onboard[victim] = 0;
//     positions[victim] = 0;
//     var pawnToMove = document.getElementById(victim);
//     switch (victim) {
//         case "redpawn1": pawnToMove.style.top = 149 + "px"; pawnToMove.style.left = 442 + "px"; break;
//         case "redpawn2": pawnToMove.style.top = 102 + "px"; pawnToMove.style.left = 395 + "px"; break;
//         case "redpawn3": pawnToMove.style.top = 55 + "px"; pawnToMove.style.left = 442 + "px"; break;
//         case "redpawn4": pawnToMove.style.top = 102 + "px"; pawnToMove.style.left = 490 + "px"; break;
//         case "bluepawn1": pawnToMove.style.top = 451 + "px"; pawnToMove.style.left = 490 + "px"; break;
//         case "bluepawn2": pawnToMove.style.top = 451 + "px"; pawnToMove.style.left = 395 + "px"; break;
//         case "bluepawn3": pawnToMove.style.top = 404 + "px"; pawnToMove.style.left = 442 + "px"; break;
//         case "bluepawn4": pawnToMove.style.top = 498 + "px"; pawnToMove.style.left = 442 + "px"; break;
//         case "greenpawn1": pawnToMove.style.top = 149 + "px"; pawnToMove.style.left = 93 + "px"; break;
//         case "greenpawn2": pawnToMove.style.top = 102 + "px"; pawnToMove.style.left = 140 + "px"; break;
//         case "greenpawn3": pawnToMove.style.top = 55 + "px"; pawnToMove.style.left = 93 + "px"; break;
//         case "greenpawn4": pawnToMove.style.top = 102 + "px"; pawnToMove.style.left = 47 + "px"; break;
//         case "yellowpawn1": pawnToMove.style.top = 451 + "px"; pawnToMove.style.left = 47 + "px"; break;
//         case "yellowpawn2": pawnToMove.style.top = 451 + "px"; pawnToMove.style.left = 140 + "px"; break;
//         case "yellowpawn3": pawnToMove.style.top = 404 + "px"; pawnToMove.style.left = 93 + "px"; break;
//         case "yellowpawn4": pawnToMove.style.top = 498 + "px"; pawnToMove.style.left = 93 + "px"; break;
//
//     }
// }

/*Dick rowlling and aded random num*/
function randomNum() {
    if (!clicked) {
        num = Math.floor((Math.random() * 6) + 1);;
        var dice = document.getElementById('dice');
        dice.style.backgroundImage = "url(asests/" + num + ".jpg)";
        clicked = true;
    }
    if (num != 6&&DontHaveOtherFree()) {
        var bad = document.getElementById('badtext');
        bad.innerText = "Unfortunatlly you stuck";
        window.setTimeout(changePlayer, 1000);
        clicked = false;
    }
}

/*Changing player*/
function changePlayer() {
    if (num != 6){
        var text = document.getElementById('player');
        switch (text.innerText) {
            case "red": text.innerText = text.style.color = "blue"; break;
            case "blue": text.innerText = text.style.color = "yellow"; break;
            case "yellow": text.innerText = text.style.color = "green"; break;
            case "green": text.innerText = text.style.color = "red"; break;
        }
    }
    var badtext = document.getElementById('badtext');
    badtext.innerText = "";
    var dice = document.getElementById('dice');
    dice.style.backgroundImage = "url(Images/dice.gif)";
}


/*Bord icon moving*/
// function randomMove(Color, paw) {
//     var text = document.getElementById('player');
//     NumOfPaw = paw;
//     currcolor = Color;
//     currpawn = currcolor + "pawn" + NumOfPaw;
//     currPos = positions[currpawn];
//     if (num + currPos > 44) {
//         Stuck();
//     }
//     else {
//         if (clicked) {
//             var position = currPos;
//             if (text.innerText == currcolor) {
//                 if (onboard[currpawn] === 1 || num === 6) {
//                     if (onboard[currpawn] === 0) {
//                         var doc = document.getElementById(currpawn);
//                         var curr = Number(doc.style.left.replace(/[a-z]/g, ''));
//                         switch (Color) {
//                             case "red":
//                                 doc.style.left = 318 + 'px';
//                                 doc.style.top = 28 + "px";
//                                 break;
//
//                             case "yellow":
//                                 doc.style.left = 219 + 'px';
//                                 doc.style.top = 523 + "px";
//                                 break;
//
//                             case "blue":
//                                 doc.style.left = 516 + 'px';
//                                 doc.style.top = 325 + "px";
//                                 break;
//
//                             case "green":
//                                 doc.style.left = 21 + 'px';
//                                 doc.style.top = 226 + "px";
//                                 break;
//                         }
//                         onboard[currpawn] = 1;
//                     }
//                     else {
//                         switch (Color) {
//                             case "red":
//                                 for (i = currPos; i < position + num; i++) {
//                                     stepsRed[i]();
//                                 }
//                                 break;
//
//                             case "yellow":
//                                 for (i = currPos; i < position + num; i++) {
//                                     stepsYellow[i]();
//                                 }
//                                 break;
//
//                             case "blue":
//                                 for (i = currPos; i < position + num; i++) {
//                                     stepsBlue[i]();
//                                 }
//                                 break;
//
//                             case "green":
//                                 for (i = currPos; i < position + num; i++) {
//                                     stepsGreen[i]();
//                                 }
//                                 break;
//                         }
//                         positions[currpawn] = currPos;
//                         var victim = HaveHover();
//                         if (victim != false) {
//                             ResetPawn(victim);
//                         }
//                         if (currPos == 44) { pawnOut[currcolor]++; onboard[currpawn] = 0; positions[currpawn] = 0; document.getElementById(currpawn).style.visibility = "hidden"; };
//                         CheckForWinner();
//                         changePlayer();
//                     }
//                     num = 0;
//                     clicked = false;
//                     var dice = document.getElementById('dice');
//                     dice.style.backgroundImage = "url(Images/dice.gif)";
//                 }
//                 else Stuck();
//             }
//         }
//     }
// }