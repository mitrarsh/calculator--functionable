var screen=document.querySelector("input");
var numBtn=document.querySelectorAll(".numbtn");
var deleteBtn=document.querySelector("#delete");
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var point=document.querySelector("#point");
var multiply=document.querySelector("#multiply");
var reset=document.querySelector("#reset");
var equal=document.querySelector("#equal");
var division=document.querySelector("#division");
var btn=document.querySelectorAll(".btn");

numBtn.forEach(btn=>
{btn.addEventListener("click",function(){
  screen.value+=btn.textContent;
})});

deleteBtn.addEventListener('click', function() {
  screen.value = screen.value.slice(0, -1);
});

reset.addEventListener('click', function() {
  screen.value = "";
});

multiply.addEventListener('click', function() {
  screen.value+="*";

});

plus.addEventListener('click', function() {
  screen.value+="+";
});

minus.addEventListener('click', function() {
  screen.value+="-";
});

point.addEventListener('click', function() {
  screen.value+=".";
});
division.addEventListener('click', function() {
  screen.value+="/";
});

equal.addEventListener('click', function evaluate() {
try{screen.value=eval(screen.value)}
catch(error){screen.value="Error"}
});

