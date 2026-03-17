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
let pressedEqualButton= 0

function ac(){
    display.innerText=""
}


function num_1(){
    
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 1
    pressedEqualButton= 0
}

function num_2(){

    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 2
    pressedEqualButton= 0
}

function num_3(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 3
    pressedEqualButton= 0
}

function num_4(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 4
    pressedEqualButton= 0
}

function num_5(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 5
    pressedEqualButton= 0
}

function num_6(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 6
    pressedEqualButton= 0
}

function num_7(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 7
    pressedEqualButton= 0
}

function num_8(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 8
    pressedEqualButton= 0

}

function num_9(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 9
    pressedEqualButton= 0
}

function num_0(){
    if (pressedEqualButton>= 1){
    ac()
    }
    display.innerText+= 0
    pressedEqualButton= 0
}

function oadd(){
    display.innerText+= "+"
    if (pressedEqualButton>= 1){
    pressedEqualButton=0
    }
}

function omin(){    
    display.innerText+= "-"
    if (pressedEqualButton>= 1){
    pressedEqualButton=0
    }
}   

function omul(){
    display.innerText+= "*"
    if (pressedEqualButton>= 1){
    pressedEqualButton=0
    }
}

function odiv(){
    display.innerText+= "/"
    if (pressedEqualButton>= 1){
    pressedEqualButton=0
    }

}

function omod(){
    display.innerText+= "%"
    if (pressedEqualButton>= 1){
    pressedEqualButton=0
    }

}

function isequal(){
    try{
    display.innerText = eval(display.innerText)
    }
    catch{
        display.innerText="error"
    }

    pressedEqualButton=pressedEqualButton+1
}

