const mailValidator = require('email-validator');
let mail = "ahmadmahboob4545@gmail.com"
if(mailValidator(mail)){
    console.log("Email Validated")
} else{
    console.log("Add Valid Email")
}
