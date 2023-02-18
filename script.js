


function dateFunc(){
    let DateInput = document.querySelector("#DateInput");
    let message = document.querySelector("#message");

    message.innerHTML = DateInput.value;
}




var clicks =0;
var clicks2=0;
var clicks3=0;
var clicks4=0;
var clicks5=0;
var clicks6=0;

//button One - 
/*function onClick(){
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks; 
};
function onMinus(){
    clicks= Math.max(0, clicks - 1);
    document.getElementById("clicks").innerHTML = clicks; 
};
*/

function updateClicks(buttonNum) {
    if (buttonNum === 1) {
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
    } else if (buttonNum === 2) {
      clicks2 += 1;
      document.getElementById("clicks2").innerHTML = clicks2;
    } else if (buttonNum === 3) {
      clicks3 += 1;
      document.getElementById("clicks3").innerHTML = clicks3;
    } else if (buttonNum === 4) {
      clicks4 += 1;
      document.getElementById("clicks4").innerHTML = clicks4;
    } else if (buttonNum === 5) {
      clicks5 += 1;
      document.getElementById("clicks5").innerHTML = clicks5;
    } else if (buttonNum === 6) {
      clicks6 += 1;
      document.getElementById("clicks6").innerHTML = clicks6;
    }
  }
  
  function onClick(buttonNum) {
    updateClicks(buttonNum);
  }
  
  function onMinus(buttonNum) {
    if (buttonNum === 1) {
      clicks = Math.max(0, clicks - 1);
      document.getElementById("clicks").innerHTML = clicks;
    } else if (buttonNum === 2) {
      clicks2 = Math.max(0, clicks2 - 1);
      document.getElementById("clicks2").innerHTML = clicks2;
    } else if (buttonNum === 3) {
      clicks3 = Math.max(0, clicks3 - 1);
      document.getElementById("clicks3").innerHTML = clicks3;
    } else if (buttonNum === 4) {
      clicks4 = Math.max(0, clicks4 - 1);
      document.getElementById("clicks4").innerHTML = clicks4;
    } else if (buttonNum === 5) {
      clicks5 = Math.max(0, clicks5 - 1);
      document.getElementById("clicks5").innerHTML = clicks5;
    } else if (buttonNum === 6) {
      clicks6 = Math.max(0, clicks6 - 1);
      document.getElementById("clicks6").innerHTML = clicks6;
    }
  }

  