let glazeOptions = [
    {
      type: 'Keep Original',
      changedPrice: "0"
    },
    {
      type: 'Sugar Milk',
      changedPrice: "0"
    },
    {
      type: 'Vanilla Milk',
      changedPrice: "0.5"
    },
    {
      type: "Double Chocolate",
      changedPrice: "1.5"
    }
  ];

  let packOptions = [
    {
      pack: '1',
      multiplier: '1'
    },
    {
      pack: '3',
      multiplier: "3"
    },
    {
      pack: '6',
      multiplier: "5"
    },
    {
      pack: "12",
      multiplier: "10"
    }
  ];


function init() {
    let glazingForm = document.getElementById("glazing-dropdown")
    for (const option of glazeOptions) {
        let optionElement = document.createElement("option")
        optionElement.value = option.changedPrice
        optionElement.innerHTML = option.type
        glazingForm.appendChild(optionElement)
    }

    let packForm = document.getElementById("pack-size")
    for (const option of packOptions) {
        let optionElement = document.createElement("option")
        optionElement.value = option.multiplier
        optionElement.innerHTML = option.pack
        packForm.appendChild(optionElement)
    }
}

function glazingChange(element) {
    const basePrice = 2.49;
    const glazingPrice = parseFloat(document.getElementById("glazing-dropdown").value);
    const packPrice = parseInt(document.getElementById("pack-size").value)
    newTotalPrice = (basePrice + glazingPrice) * packPrice
    document.getElementById("price").innerHTML = newTotalPrice.toFixed(2)
}

init()

// selectElement.addEventListener("change", glazingChange)