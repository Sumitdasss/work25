let one =document.getElementById('one');
let two =document.getElementById('two');
let three =document.getElementById('three');
let four =document.getElementById('fofive');
let five =document.getElementById('five');
let six =document.getElementById('six');
let seven =document.getElementById('seven');




// ===============================================================
seven.addEventListener("click", () => {
   
    
   if (one.style.color === "red") {
    one.style.color = "green";
   }
else if(one.style.color === "green"){
one.style.color = "blue";
}
else if(one.style.color === "blue"){
one.style.color = "pink";
}
else if(one.style.color === "pink"){
one.style.color = "yellow";
}
else if(one.style.color === "yellow"){
one.style.color = "orange";
}
else if(one.style.color === "orange"){
one.style.color = "purple";
}
else if(one.style.color === "purple"){
one.style.color = "black";
}
else if(one.style.color === "black"){
one.style.color = "white";
}

   else{
    one.style.color =  "red";
   }




   if (two.style.color === "red") {
    two.style.color = "green";
   }
else if(two.style.color === "green"){
two.style.color = "blue";
}
else if(two.style.color === "blue"){
two.style.color = "pink";
}
else if(two.style.color === "pink"){
two.style.color = "yellow";
}
else if(two.style.color === "yellow"){
two.style.color = "orange";
}
else if(two.style.color === "orange"){
two.style.color = "purple";
}
else if(two.style.color === "purple"){
two.style.color = "black";
}
else if(two.style.color === "black"){
two.style.color = "white";
}

   else{
    two.style.color =  "red";
   }
   
});
// ===============================================================
six.addEventListener("click", () => {
  
    if (document.body.style.backgroundColor === "rgba(0, 0, 0, 0.8)") {
        document.body.style.backgroundColor = "#EEEEEE";
    }
         else {
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }
});
// ===============================================================
three.addEventListener('click',()=>{
let word =document.createElement("p");
word.textContent="javascript class 5";
document.body.appendChild(word);
});
// ===============================================================
function light(){
   document.body.style.background = "#EEEEEE" ;
}
function dark(){
   document.body.style.background = "rgba(0, 0, 0, 0.8)" ;
}
// ===============================================================
// ===============================================================


let opt1 =document.getElementById("opt1");
let opt2 =document.getElementById("opt2");
let opt3 =document.getElementById("opt3");
let opt4 =document.getElementById("opt4");
let mainBtn =document.getElementById("mainBtn");

let isopen = false;

mainBtn.addEventListener("click",()=>{
if(!isopen){
   opt1.classList.add('-translate-y-20', 'scale-100')
   opt2.classList.add('translate-x-20', 'scale-100')
   opt3.classList.add('translate-y-20', 'scale-100')
   opt4.classList.add('-translate-x-20', 'scale-100')
   isopen=true;
mainBtn.innerText="close";
}
else{
   opt1.classList.remove('-translate-y-20', 'scale-100');
        opt2.classList.remove('translate-x-20', 'scale-100');
        opt3.classList.remove('translate-y-20', 'scale-100');
        opt4.classList.remove('-translate-x-20', 'scale-100');
      isopen=false;
      mainBtn.innerText="menue";
  
}

});

// ===============================================================
// ===============================================================





