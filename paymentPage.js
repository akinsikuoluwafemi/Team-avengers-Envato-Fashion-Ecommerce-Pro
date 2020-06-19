let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let output = document.getElementById("output")
let increment1 = document.getElementById("increment1")
let decrement1 = document.getElementById("decrement1")
let output1 = document.getElementById("output1")

let j = output1.textContent
let i = output.textContent


increment.addEventListener("click" , event => {

        output.textContent = ++i
})

decrement.addEventListener("click" , event => {
        output.textContent = --i
})


increment1.addEventListener("click" , event => {

        output1.textContent = ++j
})

decrement1.addEventListener("click" , event => {
        output1.textContent = --j
})



