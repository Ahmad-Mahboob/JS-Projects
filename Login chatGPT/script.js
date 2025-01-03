let users = [
    {
        userName: "Ahmad",
        email: "ahmad@mail.com",
        pass: "Ahmad@123",
        userID: 1,
        favFoods: []
    },
    {
        userName: "Hamid",
        email: "hamid@mail.com",
        pass: "Hamid@123",
        userID: 2,
        favFoods: []
    },
    {
        userName: "Hareem",
        email: "hareem@mail.com",
        pass: "Hareem@123",
        userID: 3,
        favFoods: []
    },
    {
        userName: "Waleeja",
        email: "waleeja@mail.com",
        pass: "Waleeja@123",
        userID: 4,
        favFoods: []
    },
];

let inputMail = document.querySelector("#input-mail");
let inputPass = document.querySelector("#input-pass");
let loggedInUser = null;  // Variable to store the logged-in user

function checkUserID() {
    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (inputMail.value === users[i].email && inputPass.value === users[i].pass) {
            loggedInUser = users[i];  // Store the logged-in user's data
            document.querySelector("#show-result").innerText = `Welcome, ${users[i].userName}! Your userID is ${users[i].userID}.`;
            document.querySelector("#food-section").style.display = "block";  // Show food input section
            found = true;
            break;
        }
    }

    if (!found) {
        document.querySelector("#show-result").innerText = `Not Found in Database`;
        document.querySelector("#food-section").style.display = "none";  // Hide food input if not logged in
    }
    inputMail.value = "";
    inputPass.value = "";
}

function showPassword() {
    if (inputPass.type === "password") {
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
}

function addFavoriteFood() {
    if (loggedInUser) {
        let foodInput = document.querySelector("#input-food").value.trim();
        
        if (foodInput === "") {
            document.querySelector("#food-feedback").innerText = "Please enter a valid food name.";
            return;
        }

        // Add the food to the logged-in user's favFoods array
        loggedInUser.favFoods.push(foodInput);
        document.querySelector("#food-feedback").innerText = `Added "${foodInput}" to your favorite foods!`;

        // Clear the input field
        document.querySelector("#input-food").value = "";
        console.log("Updated user data:", loggedInUser);
    } else {
        document.querySelector("#food-feedback").innerText = "Please log in to add favorite foods.";
    }
}
