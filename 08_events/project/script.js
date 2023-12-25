// THIS IS MY APPROACH -> NOT COMPLETELY DONE
//edit -> learned from sir's appraoch and completed

// const body = document.body;
// // console.log(body);
// // body.style.backgroundColor = "rgb(9,0,0)";
// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
// // const interval = setInterval(()=>changeBg(e),3000);
// function changeBg(e){
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     const body = e.target.parentNode;
//     body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// }
// let interval;
// start.addEventListener("click", (e) => {
//     interval = setInterval(()=>changeBg(e),1000);
// });
// stop.addEventListener("click",()=>{
//     clearInterval(interval);
// })

// THIS IS SIR'S APPRAOCH

// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // Math.floor(Math.random() * 16);
    color += hex[Math.floor(Math.random() * 16)]; //hex is an array
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000); //Safety check after clearing the variable after setting it to null
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId); //this will give error
  intervalId = null; //this is useful because clearing the variable. --> Cleaner code -Industry Standard
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);

// NOTE
// The safety check in line 39-41 and setting intervalID to null are important because when you try to click start more than once, you'll see change of colors very often
// IMPORTANT:
// The safety check -> if it is not null then only change the color else leave it;
