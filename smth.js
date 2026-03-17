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

function save(){
    let prevText =document.getElementById("prev-text")
        prevText.innerText+=":"+count
    
    count=0
    document.getElementById("counter").innerText= count
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



// calculator Activated ............
let display=document.getElementById("display")

function ac(){
    display.innerText=0
}


function num_1(){
    display.innerText+= 1
}

function num_2(){
    display.innerText+= 2
}

function num_3(){
    display.innerText+= 3
}

function num_4(){
    display.innerText+= 4
}

function num_5(){
    display.innerText+= 5
}

function num_6(){
    display.innerText+= 6
}

function num_7(){
    display.innerText+= 7
}

function num_8(){
    display.innerText+= 8
}

function num_9(){
    display.innerText+= 9
}

function num_0(){
    display.innerText+= 0
}

function oadd(){
    display.innerText+= "+"
}

function omin(){    
    display.innerText+= "-"
}   

function omul(){
    display.innerText+= "*"
}

function odiv(){
    display.innerText+= "/"
}

function omod(){
    display.innerText+= "mod"
}

