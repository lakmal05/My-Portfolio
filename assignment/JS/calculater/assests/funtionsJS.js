function fn0(){
let previous =document.getElementById("display").innerHTML;
document.getElementById("display").innerHTML =previous + 0;

}


function fn1(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 1;

}function fn2(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 2;

}function fn3(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 3;

}function fn4(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 4;

}function fn5(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 5;

}function fn6(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 6;

}function fn7(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 7;

}function fn8(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 8;

}function fn9(){
    let previous =document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =previous + 9;

}



// ereser


function AC(){
    let previous =document.getElementById("display").innerHTML;
   let clear =previous.slice(0,-1);
   document.getElementById("display").innerHTML=clear;
}




// fubtions


let op;
let firstNum;

function fnplus(){
     firstNum = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
    op = 1;

}


function fnminers(){
    firstNum = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
  op = 2;

}
function fndevied(){
    firstNum = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML =0;
     op = "devied";

}



// equla

function fnequal(){
    let secNum =document.getElementById("display").innerHTML;
    if (op == 1){
        document.getElementById("display").innerHTML =  parseInt(firstNum)+parseInt(secNum);
    }
    if (op == 2){
        document.getElementById("display").innerHTML =  parseInt(firstNum) - parseInt(secNum);
    }

}
