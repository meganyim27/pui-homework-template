let element = [
    {Keep Original: "0.00"},
    {Sugar Milk: "0.00"},
    {Vanilla Milk: "0.50"},
    {Double Chocolate: "1.50"}
];

function glazingChange() {
    console.log(glazingIndex)
    let glazingIndex = parseInt(this.value);
    let displayGlazing = element[glazingIndex];
    const basePrice = 2.49
    const glazingPrice = parseFloat(document.getElementById("glazing-dropdown").value)
    let totalPrice = basePrice + glazingPrice
    
    updatePrice(displayGlazing);

}

selectElement.addEventListener("change", glazingChange)