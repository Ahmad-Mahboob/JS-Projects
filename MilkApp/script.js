class customer {
    constructor(name, quantity, type, price) {
        this.name = name,
            this.quantity = quantity,
            this.type = type,
            this.price = price

        console.log(`The Customer: ${name} for ${type} ${quantity} milk with the price: ${price} has been registered`)
    }
}

let customers = [
    new customer("Ahmad Mahboob", 3, "Cow", 120),
    new customer("Hamid Mahboob", 3, "Buffalo", 160),
    new customer("Hareem Fatima", 3, "Cow", 110),
    new customer("Waleeja Mahboob", 3, "Buffalo", 140),
]

// let toFindName = "Ahmad Mahboob"
function checkIndex(toFindName) {
    for (let i = 0; i < customers.length; i++) {
        if (toFindName == customers[i].name) {
            return i
        }
        else if (testIndex(customers , toFindName)) {
            return "Not Found"
        }
    }
}

function testIndex(arr, name){
    let value = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name != name){
            value++
        }
    }
    if(value == arr.length){
        return true
    }
}

function calculatePrice(name, noOfDays) {
    let finalPriceDisplay
    if (checkIndex(name) == "Not Found") {
        finalPriceDisplay = `The ${name} not found`
    } else {
        let arrIndex = checkIndex(name)
        let milkQuantity = customers[arrIndex].quantity
        let milkPrice = customers[arrIndex].price
        let productPrice = milkQuantity * milkPrice
        let finalPrice = productPrice * noOfDays
        finalPriceDisplay = `The Price Of ${customers[arrIndex].type} ${milkQuantity}'s Kg/s Per Day For ${noOfDays} With A Price Of ${milkPrice}/Kg Is: Rs.${finalPrice}`
    }
    return finalPriceDisplay
}

function addCustomer(name, quantity, type, price) {
    customers.push(new customer(name, quantity, type, price))
}

function deleteCustomer(name) {
    let response;
    if (checkIndex(name) == "Not Found") {
        response = `The ${name} not found`
    } else {
        let result = confirm(`Are You Sure To Delete ${name}`)
        if (result) {
            let arrIndex = checkIndex(name)
            customers.splice(arrIndex, 1);
            response = `The ${name} has been deleted`
        }else{
            response = `The ${name} has not been deleted because you have not confirmed`
        }
    }
    return console.log(response)
}