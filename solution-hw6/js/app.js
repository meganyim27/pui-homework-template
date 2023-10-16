// initialzing "Cart"
let cart = [];

//save data to local storage
function saveToLocalStorage () {
    localStorage.setItem("storedCart", JSON.stringify(cart));
    console.log(storedCart);
};

//retrieving data from the local storage
const storedCart = localStorage.getItem("storedCart")
    if (storedCart !== null) {
        cart = JSON.parse(storedCart);
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
    textContainer.classList.add("text-container");
    
    // get the image for each product item
    let item_img = document.createElement("img");
    item_img.classList.add("item-img");
    item_img.src = '../assets/products/'+roll.type.toLowerCase()+"-cinnamon-roll.jpg";
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
    //.parentNode pulls the parent element of the removeButton, in this case the rollContainer
    removeButton.addEventListener("click", () => {
        removeButton.parentNode.remove();
        //creates a new array that passes the test of the function that is passed into .filter
        cart = cart.filter((item) => item !== roll);

        const sumPrice = document.querySelector("#cartPrice");
        sumPrice.innerText = "$" + (totalPrice(cart)).toFixed(2);

        saveToLocalStorage();
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
sumPrice.innerText = "$" + (totalPrice(cart)).toFixed(2);

cart.forEach(displayRoll);