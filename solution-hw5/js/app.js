
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

// the array to hold all the Roll Objects
let cart = [];

function addNewRoll(rollType, rollGlazing, packSize, rollPrice) {

    let glazePrice = 0
    // creating the glazePrice based on rollGlazing 
    if (rollGlazing === "Original") {
            glazePrice = 0
        }
        else if (rollGlazing === "Sugar Milk") {
            glazePrice = 0
        }
        else if (rollGlazing === "Vanilla Milk") {
            glazePrice = 0.50
        }
        else {
            glazePrice = 1.50
        }
    

    //  multiplying the right amount for packSize
    let packPrice = 0
    if (packSize === 1) {
            packPrice = 1
        }
        else if (packSize === 3) {
            packPrice = 3
        }
        else if (packSize === 6) {
            packPrice = 5
        }
        else {
            packPrice = 10
        }


    const rollItem = new Roll(rollType, rollGlazing, packSize, rollPrice);
    rollItem.calculatedPrice =  ((rollPrice + glazePrice) * packPrice).toFixed(2);
    cart.push(rollItem);
    return rollItem;
}   

// all the Roll objects
addNewRoll("Original", "Sugar Milk", 1, 2.49)
addNewRoll("Walnut", "Vanilla Milk", 12, 3.49)
addNewRoll("Raisin", "Sugar Milk", 3, 2.99)
addNewRoll("Apple", "Original", 3, 3.49)

// console.log(cart)


// creating delete function
function deleteRoll(roll) {
    document.getElementById(roll.type).remove();
    // getting rid of it from the array
    let i = 0;
    for (let roll of cart) {
        if (cart[i].type==roll.type) {
            cart.splice(i,1);
        }
        else {
            i++;
        }
    }
    // totalPrice(cart);
    const sumPrice = document.querySelector("#cartPrice");
    sumPrice.innerText = "$" + (totalPrice(cart)).toFixed(2);
}
// add to DOM

function displayRoll(roll) {
    let shopping_cart = document.getElementById("cart-list");
    let rollElement = document.createElement("div");
    //assigning an id to all the roll Element divs based on the name of the roll type
    rollElement.id = roll.type;
    rollElement.classList.add("roll-container");

    // create a second div for remove button
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    // create a div to make text stay in columns
    let textContainer = document.createElement("div");
    
    // get the image for each product item
    let item_img = document.createElement("img");
    item_img.classList.add("item-img");
    item_img.src = '../assets/products/'+roll.type+"-cinnamon-roll.jpg";
    mainContainer.appendChild(item_img);
    
    mainContainer.appendChild(textContainer);

    //get the item name for each product item
    let item_name = document.createElement("div");
    item_name.classList.add("item-name");
    item_name.innerText = roll.type + " Cinnamon Roll";
    textContainer.appendChild(item_name);

    //get the glaze for each product Item
    let item_glaze = document.createElement("div");
    item_glaze.classList.add("item-glaze");
    item_glaze.innerText = roll.glazing;
    textContainer.appendChild(item_glaze);

    //get the pack size for each product item
    let item_pack = document.createElement("div");
    item_pack.classList.add("item-pack");
    item_pack.innerText = "Pack Size: " + roll.size;
    textContainer.appendChild(item_pack);

    //get calculated price for each product item
    let item_price = document.createElement("div");
    item_price.classList.add ("item-price");
    item_price.innerText = "$"+String(roll.calculatedPrice);
    mainContainer.appendChild(item_price);

    //making the button
    let removeButton = document.createElement("p");
    removeButton.classList.add("rem-btn")
    removeButton.innerText = "Remove";

    // making remove button functionality
    removeButton.addEventListener("click", () => {
        deleteRoll(roll);
        }
    )

    rollElement.appendChild(mainContainer);
    rollElement.appendChild(removeButton);

    shopping_cart.appendChild(rollElement);
}

// create the function for the cart total price
function totalPrice(cart) {
    let sum = 0;
    for (const roll of cart) {
        const num = parseFloat(roll.calculatedPrice);
        sum = sum + num;
    }
    return(sum);
}

// display the cart total price
const sumPrice = document.querySelector("#cartPrice");
sumPrice.innerText = "$" + totalPrice(cart);

cart.forEach(displayRoll);
