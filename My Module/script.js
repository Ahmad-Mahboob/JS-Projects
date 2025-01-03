// let testingText = document.querySelector('#text')
// let button = document.querySelector("#checkbtn")
let email = "ahmad@fake.com"
// @ is used

let mailValidator = (givenMail) => {
    let mail = givenMail.value || givenMail
    let isValid = false
    let hasSymbol = mail.includes('@');  
    let hasDot = mail.includes('.');     
    let hasSpace = mail.includes(' ');  
    let hasServerName = false
    let symbolIndex = checkIndex(mail, `@`)
    let dotIndex = checkIndex(mail, `.`)



    if (dotIndex > symbolIndex) {
        hasServerName = true
    }


    if (mail == "") {
        alert(`Please Enter An Email`)
    }
    for (i = 0; i < mail.length; i++) {

    }
    if (mail[0] == '.' || mail[mail.length - 1] == '.') {
        isValid = false
    }
    if (mail[0] == '@' || mail[mail.length - 1] == "@") {
        isValid = false
    }
    if (hasSymbol && hasDot && !hasSpace && hasServerName) {
        isValid = true
    }

    if (!isValid) {
        alert(`Please Enter Valid Email`)
    }
    console.log(isValid)
    return isValid
}


// button.addEventListener("click", () => {
//     let testingText = document.querySelector('#text')
//     mailValidator(testingText);
// });



function checkIndex(arr, char) {
    let index
    if (char) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] == `${char}`) {
                 return index = i
            }
        }
        if (!index) {
            console.log(`Index Not Found`)
            return index = false
        }
    }
    else {
        console.log("Please Enter Some Characters")
        return index = false
    }
}
module.exports = mailValidator