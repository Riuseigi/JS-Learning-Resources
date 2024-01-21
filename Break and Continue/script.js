// The break statement "jumps out" of a loop.
for(let i =0 ; i<=20;i++){
    if(i===15){
        console.log("Breaking..")
        break;
    }
    console.log(i)
}






// The continue statement "jumps over" one iteration in the loop.
for(let i =0 ; i<=20;i++){
    if(i===15){
        console.log("Skipping 13..")
        continue;
    }
    console.log(i)
}


