let container = document.querySelector(`.container`)

for(let i = 0; i < invoices.length; i++){
    container.innerHTML += `
    <div class="invoice">
            <h1 class="client">${invoices[i].client}</h1>
            <h4 class="item">${invoices[i].item}</h4>
            <p class="remaining">${invoices[i].quantity} ${invoices[i].status}  ${invoices[i].dueDate}</p>
        </div>`
}