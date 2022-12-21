const button = document.querySelector('button')

// button.classList.toggle('altColor')

button.addEventListener("click", ()=>{
    button.classList.toggle('altColor')
})

function firstAction(callback, message, anotherCallback ){
    console.log(message)
    setTimeout(callback, 2000) 
    anotherCallback()
}

function secondAction(message){
    console.log(message)
}
function thirdAction(){
    console.log("I'm the third action")
}

setTimeout( ()=> firstAction( ()=> 
secondAction("I'm the second action"), "I'm the first action", thirdAction), 5000)

// setTimeout(() => {
//     firstAction(()=>secondAction("I'm the second action"), "I'm the first action", thirdAction)
// }, 5000);