// A list of cars with models and descriptions. We will create these
// using a class in later assignments, but it's not necessary for
// this simple example.
let glazeOptions = [
    {
      type: 'Keep Original',
      changedPrice: 0,
    },
    {
      type: 'Sugar Milk',
      changedPrice: 0,
    },
    {
      type: 'Vanilla Milk',
      changedPrice: 0.5,
    },
    {
      type: "Double Chocolate",
      changedPrice: 1.5,
    }
  ];
  
  /**
   * Updates the UI to display a particular car's info.
   * @param price A car object containing a model and a description.
   */
  function init(price) {
    let priceElement = document.querySelector("#price")
    priceElement.innerText = price.toFixed(2);
    // priceElement.innerText = price.Vanilla Milk
}

function glazingChange() {
    const basePrice = 2.49;
    const glazingPrice = parseFloat(document.getElementById("glazing-dropdown").value);
    const packPrice = parseInt(document.getElementById("pack-size").value)
    newTotalPrice = (basePrice + glazingPrice) * packPrice
    init(newTotalPrice)
}

let selectElement = document.querySelector('#price');
  
//   // When the page loads, find the select element.
//   let selectElement = document.querySelector('#glazing-dropdown');
  
//   // Let's add a new car to the allCars array.
//   let newGlaze = {
//     type: 'Honey',
//     changedPrice: 5,
//   };
//   allGlazes.push(newGlaze);
  
  // We also need to add this new car to the UI. To do that, create a new
  // 'option' HTML element, set its attributes, and add it to the select
  // element.
//   var option = document.createElement('option');
//   option.text = newGlaze.type;
//   option.value = allGlazes.length - 1; // Its value should be the index of the last element in allCars
//   selectElement.add(option);
  
  // Give it a listener for the 'change' event, which is a function that will run
  // when the selected option changes. You could also do this by setting the
  // onchange property of selectElement, e.g. selectElement.onchange = ...
  selectElement.addEventListener('change', onPriceChange);
  
  // Initially, display the first car
  init(allGlazes[0]);
  