let timeDisplay = document.querySelector("#time")
let time
let submitBtn = document.querySelector("#submit")

let actualTime = time * 1000


submitBtn.addEventListener("click", ()=>{
    time = document.querySelector("#timeInput").value
    document.querySelector("#timeInput").value = ""
    let idNo = setInterval(() => {
        if(time > 0){
            timeDisplay.innerText = `The Stopwatch Time Is: ${time}`
            time--
        } else {
            timeDisplay.innerText = `Time Has Ended`
            clearInterval(idNo)
        }
    }, 1000)
})
