document.getElementById("menu").innerText = "Here Is Menu" 
let count=0
function increment(){
    count=count+1
    console.log(count)
    document.getElementById("counter").innerText = count
}

function decrement(){
    count=count-1
    console.log(count)
    document.getElementById("counter").innerText = count
}

document.getElementById("menu").innerText="About"
document.getElementById("book-a-table").innerText="This is counter"
document.getElementById("catering").innerText="switch-mode"

let isdark=false
function changemode(){
    if(isdark==false){
        document.body.style.background="linear-gradient(brown,grey)";
        console.log("light mode activated")
        isdark=true
    }
    else{
        document.body.style.background = "linear-gradient(lightskyblue, white)";
        console.log("dark mode activated")    
        isdark=false    
    }
}