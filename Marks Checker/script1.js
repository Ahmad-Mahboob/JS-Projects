let users = []
let storedUsers;
for(let i = 0; i < localStorage.length; i++){
    storedUsers = localStorage.getItem(`user${i + 1}`)
    if(storedUsers){
        users.push(JSON.parse(storedUsers))
    }
}
console.log(users)
let inputName = document.querySelector("#input-name")
function showMarks(){
    console.log(1000)
    let name = inputName.value
    console.log(users.length)
    console.log(name)
    for(let i = 0; i < users.length; i++){
        let usersName = users[i].name;
        if(usersName == name){
            console.log("Hello")
            document.querySelector("#show-marks").innerText = `You have secured ${users[i].obtainedMarks} marks`
            inputName.value = ""
            break
        }
        else{
            document.querySelector("#show-marks").innerText = `PLEASE ENTER VALID NAME`;
            inputName.value = ""
            continue
        }
    }
}

let inputNameMarks = document.querySelector("#input-name-marks");
let inputMarks = document.querySelector("#input-marks")

function addMarks(){
    let name = inputNameMarks.value
    let marks = inputMarks.value
    let rollNumberAdd = users.length + 1
    console.log(10)

    if(name == "" || marks == ""){
        document.querySelector("#display-confirm").innerText = "Please Enter Valid Name & Marks"
    } else {
        users.push({
            name : `${name}`,
            rollNumber : `${rollNumberAdd}`,
            obtainedMarks : `${marks}`,
        })
        localStorage.setItem(`user${rollNumberAdd}`,JSON.stringify({
            name : `${name}`,
            rollNumber : `${rollNumberAdd}`,
            obtainedMarks : `${marks}`,
        }))
        document.querySelector("#display-confirm").innerText = `The Student ${name}'s marks: ${marks} have been entered successfully`
        inputNameMarks.value = ""
        inputMarks.value = ""
    }
}