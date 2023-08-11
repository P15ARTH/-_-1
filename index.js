alert("Request you to open in desktop mode");
let allbtn = document.querySelectorAll('button');
let cal = document.getElementsByClassName("calculation")[0];
let display = document.getElementsByClassName("disply-content")[0];
let ans = document.getElementsByClassName("answere")[0];

// console.log(cal);
// console.log(allbtn);

for (var i = 0; i < allbtn.length; i++) {
  allbtn[i].addEventListener("click", function () {
    let value = this.dataset.value;

    if (value === "clear") {
      cal.textContent = "";
      ans.textContent = "";
    } else if (value === "del") {
      cal.textContent = cal.textContent.slice(0, -1);

    } else if (value === "sq") {
      let number = cal.textContent;
      let squareRoot = Math.sqrt(number);
      ans.textContent = squareRoot;

    }else if(value === "plus/minus"){
        cal.textContent = " - ";

    } else if (value === "ans") {
      let result = eval(cal.textContent);
      ans.textContent = result;

    } else if( value === "enter"){
      let result = eval(cal.textContent);
      ans.textContent = result;

    } else {
      cal.textContent += value;

    }
  });
}
