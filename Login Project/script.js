let users = [
    {
        userName: "Ahmad",
        email: "ahmad@mail.com",
        pass: "Ahmad@123",
        userID: 1,
    },
    {
        userName: "Hamid",
        email: "hamid@mail.com",
        pass: "Hamid@123",
        userID: 2,
    },
    {
        userName: "Hareem",
        email: "hareem@mail.com",
        pass: "Hareem@123",
        userID: 3,
    },
    {
        userName: "Waleeja",
        email: "waleeja@mail.com",
        pass: "Waleeja@123",
        userID: 4,
    },
];

// Select input elements
let inputMail = document.querySelector("#input-mail");
let inputPass = document.querySelector("#input-pass");

function checkUserID() {
    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (inputMail.value === users[i].email && inputPass.value === users[i].pass) {
            document.querySelector("#show-result").innerText = `The user: ${users[i].userName} has userID: ${users[i].userID}`;
            found = true;
            inputMail.value = ""
            inputPass.value = "" 
            break;
        }
    }

    if (!found) {
        document.querySelector("#show-result").innerText = `Not Found in Database`;
    }
}


function showPassword(){
    if (inputPass.type === "password"){
        inputPass.type = "text"
    } else {
        inputPass.type = "password"
    }
}