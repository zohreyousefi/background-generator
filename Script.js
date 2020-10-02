
var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");


function setgradient (){
    body.style.background = "linear-gradient(to right, "
    + color1.value + ", " + color2.value + ")";
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);

// var button = document.getElementsByagName("button")[0];

//button.addEventListener("mousemove", function () {
//    console.log("click!!!!");
//})


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputlength(){
//    return input.value.length;
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addlistAfterClick(){
//     if (inputlength() > 0 ){
//         createListElement();
//     }
// }

// button.addEventListener("click", addlistAfterClick);

// function addListAfterKeypress(event){
//     if(inputlength() > 0 && event.keyCode === 13 ){
//         createListElement();
//         }
// }

// input.addEventListener("keypress", addListAfterKeypress);


