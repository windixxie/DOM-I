const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const digits = document.querySelectorAll(".digit");



/////////////////The working timer :) ////////////////
let ms = 0;

let intv = setInterval(function() {
    ms += 10;
    let display = ms/1000;
    display = display < 10 ? '0' + display : display.toString();
    display = display.length === 4 ? display + '0' : display;
    display = display === '10' ? '10.00' : display;
    display = display.replace ('.', ':')
    document.getElementById('msTens').innerHTML = display;
    if (ms === 10000) return clearInterval(intv)
},10)

//////////////////THE BAD SUCKY TIMER////////////////////
// function countZeroToNine(target, ms) {
//     let count = 0;

//     const counter = setInterval(function() {
//         if(count < 9) {
//             count += 1;
//         } else {
//             count = 0;
//         }
//         target.innerHTML = count;
//         if(secondTens.innerHTML === '1') {
//             clearInterval(counter);
//             digits.forEach(item => item.getElementsByClassName.color = "red");
//         }
//     }, ms)
// }
//
//alert("This timer sucks");
// countZeroToNine(secondTens, 10000);
// countZeroToNine(secondOnes, 1000);
// countZeroToNine(msHundreds, 100);
// countZeroToNine(msTens, 10);





