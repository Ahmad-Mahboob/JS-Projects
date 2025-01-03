let invoiceNumber
let vendorName = "Ahmad"
let vendor
let client = document.querySelector('#client')
let item = document.querySelector('#item')
let quantity = document.querySelector('#quantity')
let dueDate = document.querySelector('#dueDate')

let createInvoiceBtn = document.querySelector(`#createInvoiceBtn`)
class invoice {
    constructor(vendor, client, item, quantity, dueDate, status, invoiceNumber) {
        if (vendorName) {
            this.vendor = vendorName
        }
        this.vendor = vendor
        this.client = client
        this.invoiceNumber = invoiceNumber
        this.item = item
        this.quantity = quantity
        this.dueDate = dueDate
        if (status) {
            this.status = status
        } else {
            this.status = "Unpaid"
        }
    }
    updateStatus = (newStatus) => {
        this.status = newStatus
    }
}
function createInvoice(vendor, client, item, quantity, dueDate, status) {
    let invoiceNumber = invoices.length + 1
    invoices.push(new invoice(vendor, client, item, quantity, dueDate, status, invoiceNumber))
    return console.log("Invoice Added Successfully")
}

createInvoiceBtn.addEventListener('click', () => {
    client = client.value
    item = item.value
    quantity = quantity.value
    dueDate = dueDate.value
    console.log(client)
    console.log(quantity)
    console.log(item)
    console.log(dueDate)
    if (!client) {
        console.log(1)
    }
    if (!item) {
        console.log(2)
    }
    if (!quantity) {
        console.log(3)
    }
    if (!dueDate) {
        console.log(4)
    }
    if (client && item && quantity && dueDate) {
        createInvoice(vendor, client, item, quantity, dueDate)
    } else {
        console.log("There's some error")
    }
})