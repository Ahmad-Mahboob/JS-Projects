let users = [
    {
        name : "Ahmad Mahboob",
        rollNumber : 1,
        obtainedMarks : 1168,
    },
    {
        name : "Zeeshan Madni",
        rollNumber : 2,
        obtainedMarks : 1168,
    },
    {
        name : "Zaid Farooq",
        rollNumber : 3,
        obtainedMarks : 1168,
    },
    {
        name : "Saqib",
        rollNumber : 4,
        obtainedMarks : 1143,
    },
    {
        name : "Anees Fazil",
        rollNumber : 5,
        obtainedMarks : 1138,
    }
]
for(let i = 0; i < users.length; i++){
    localStorage.setItem(`user: ${i + 1}`,JSON.stringify(users[i]))
}
let inputName = document.querySelector("#input-name")
function showMarks(){
    let name = inputName.value
    for(let i = 0; i < users.length; i++){
        let usersName = users[i].name;
        if(usersName == name){
            document.querySelector("#show-marks").innerText = `You have secured ${users[i].obtainedMarks}`
            console.log(users[i].obtainedMarks)
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

    if(name == "" || marks == ""){
        document.querySelector("#display-confirm").innerText = "Please Enter Valid Name & Marks"
    } else {
        users.push({
            name : `${name}`,
            rollNumber : `${rollNumberAdd}`,
            obtainedMarks : `${marks}`,
        })
        localStorage.setItem(`User ${rollNumberAdd}`,JSON.stringify({
            name : `${name}`,
            rollNumber : `${rollNumberAdd}`,
            obtainedMarks : `${marks}`,
        }))
        document.querySelector("#display-confirm").innerText = `The Student ${name}'s marks: ${marks} have been entered successfully`
        inputNameMarks.value = ""
        inputMarks.value = ""
    }
}