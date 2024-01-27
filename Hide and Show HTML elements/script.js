// eventListener = listen for sepcific events to create interactive web pages(event: keydown,keyup
//addEventListener(event, callback));

const pikachu = document.getElementById("pikachu");

const toggleButton = document.getElementById("toggleButton");

const pokeball = document.getElementById("pokeball")



toggleButton.addEventListener("click",(event) => {
  if(pokeball.src.endsWith("close.png")){
    pokeball.src = "./open.png";
    pikachu.style.visibility = "visible"
  }else{
    pokeball.src = "./close.png";
    pikachu.style.visibility = "hidden"
  }
})