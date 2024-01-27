// eventListener = listen for sepcific events to create interactive web pages(event: keydown,keyup
//addEventListener(event, callback));

const myBox = document.getElementById("myBox")
let moveAmount = 10;
let x =0;
let y =0;

document.addEventListener("keydown",(event) => {
  myBox.textContent = "😫"
  myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup",(event) => {
    myBox.textContent = "😁"
    myBox.style.backgroundColor = "lightblue";
  })


document.addEventListener("keydown", (event) => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault()
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
    }
    console.log(y)
    myBox.style.top = `${y}px`
    myBox.style.left = `${x}px`
    }
})

