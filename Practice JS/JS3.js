JS3.js
let countElm = document.getElementById("count-el");
console.log(countElm)
let count = 0

function increment (){
     
     count = count + 1
     countElm.innertext = count
          
}