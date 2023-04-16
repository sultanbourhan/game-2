


let start = document.querySelector(".start span")
let inputx = document.querySelector(".input .x")
let inputo = document.querySelector(".input .o")

let userx = document.querySelector(".game .x")
let user = document.querySelector(".game .user")
let usero = document.querySelector(".game .o")




start.onclick = function(){
    start.parentElement.style.display = "none"

    if(inputx.value === ""){
        userx.innerHTML = "usre : X"
    }else{
        userx.innerHTML = `${inputx.value} : X`
    }

    if(inputo.value === ""){
        usero.innerHTML = "usre : O"
        user.style.fontSize = "40px"
    }else{
        usero.innerHTML = `${inputo.value} : O`
    }

    if(inputx.value === ""){
        user.innerHTML = "X"
        user.style.fontSize = "40px"
    }else{
        user.innerHTML = inputx.value
    }

    
}


let xoro = document.querySelectorAll(".x-o .x-or-o")
let xoroarre = Array.from(xoro)



xoro.forEach((xo) =>{
    xo.onclick = function(){

        xo.classList.add("stop")
        
        let xoroarrefilx = xoroarre.filter(xoroarre =>xoroarre.classList.contains("x"))
        let xoroarrefilo = xoroarre.filter(xoroarre =>xoroarre.classList.contains("o"))
        


        

        if(xoroarrefilx.length > xoroarrefilo.length){
            xo.innerHTML = "O"
            xo.classList.add("o")

            if(inputx.value === ""){
                user.innerHTML = "X"
                user.style.fontSize = "40px"
            }else{
                user.innerHTML = inputx.value
            }
        }else{
            xo.innerHTML = "X"
            xo.classList.add("x")

            if(inputo.value === ""){
                user.innerHTML = "O"
                user.style.fontSize = "40px"
            }else{
                user.innerHTML = inputo.value
            }
        }
        thick ()
    }
})




let xo1 = document.querySelector(".continer .x-o .x-or-o:first-child")
let xo2 = document.querySelector(".continer .x-o .x-or-o:nth-child(2)")
let xo3 = document.querySelector(".continer .x-o .x-or-o:nth-child(3)")
let xo4 = document.querySelector(".continer .x-o .x-or-o:nth-child(4)")
let xo5 = document.querySelector(".continer .x-o .x-or-o:nth-child(5)")
let xo6 = document.querySelector(".continer .x-o .x-or-o:nth-child(6)")
let xo7 = document.querySelector(".continer .x-o .x-or-o:nth-child(7)")
let xo8 = document.querySelector(".continer .x-o .x-or-o:nth-child(8)")
let xo9 = document.querySelector(".continer .x-o .x-or-o:last-child")



let startAgin = document.querySelector(".start-agin")
let userWinner = document.querySelector(".user-winner")
let Agin = document.querySelector(".startAgin")

function thick (){

    let xoroarrefilStop = xoroarre.filter(xoroarre =>xoroarre.classList.contains("stop"))



    if(xo1.classList.contains("x") && xo2.classList.contains("x") && xo3.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo2.style.backgroundColor = "#171f22"
        xo3.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo4.classList.contains("x") && xo5.classList.contains("x") && xo6.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo4.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo6.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }
    
    if(xo7.classList.contains("x") && xo8.classList.contains("x") && xo9.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo7.style.backgroundColor = "#171f22"
        xo8.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo1.classList.contains("x") && xo4.classList.contains("x") && xo7.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo4.style.backgroundColor = "#171f22"
        xo7.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo2.classList.contains("x") && xo5.classList.contains("x") && xo8.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo2.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo8.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo3.classList.contains("x") && xo6.classList.contains("x") && xo9.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo3.style.backgroundColor = "#171f22"
        xo6.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo1.classList.contains("x") && xo5.classList.contains("x") && xo9.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo3.classList.contains("x") && xo5.classList.contains("x") && xo7.classList.contains("x")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo3.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo7.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if( inputx.value === ""){
            userWinner.innerHTML += "X"
        }else{
            userWinner.innerHTML += inputx.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }




    if(xo1.classList.contains("o") && xo2.classList.contains("o") && xo3.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo2.style.backgroundColor = "#171f22"
        xo3.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo4.classList.contains("o") && xo5.classList.contains("o") && xo6.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo4.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo6.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }
    
    if(xo7.classList.contains("o") && xo8.classList.contains("o") && xo9.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo7.style.backgroundColor = "#171f22"
        xo8.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo1.classList.contains("o") && xo4.classList.contains("o") && xo7.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo4.style.backgroundColor = "#171f22"
        xo7.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo2.classList.contains("o") && xo5.classList.contains("o") && xo8.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo2.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo8.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo3.classList.contains("o") && xo6.classList.contains("o") && xo9.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo3.style.backgroundColor = "#171f22"
        xo6.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo1.classList.contains("o") && xo5.classList.contains("o") && xo9.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo1.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo9.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }

    if(xo3.classList.contains("o") && xo5.classList.contains("o") && xo7.classList.contains("o")){
        xoro.forEach((xo)=>{
            xo.classList.add("stop")
        })
        xo3.style.backgroundColor = "#171f22"
        xo5.style.backgroundColor = "#171f22"
        xo7.style.backgroundColor = "#171f22"

        setTimeout(function(){
            startAgin.style.display = "flex"
        },2000)

        if(inputo.value === ""){
            userWinner.innerHTML += "O"
        }else{
            userWinner.innerHTML += inputo.value
        }
    }else{
        if(xoroarrefilStop.length === 9){
            setTimeout(function(){
                startAgin.style.display = "flex"
            },2000)

            userWinner.innerHTML = "Nall"
        }
    }
    
}


Agin.onclick = function(){
    location.reload()
}

