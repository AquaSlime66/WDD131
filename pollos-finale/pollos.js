//imports the food menu:
import { falseMenu, foodMenu } from "./storage.js";




//1: displays the secret recipe when clicked
function toggleValley() {
    const valleySelectorID = document.querySelector("#valley");
    valleySelectorID.classList.toggle("hiddenValley");
}

// toggles the Saul ad to be displayed or hidden
function toggleSaul(number) {
    const saulID = document.querySelector("#saulAD");

    if (number === 1) {
        saulID.classList.toggle("hiddenValley");
    }
    else if (number === 2) {
        saulID.classList.add("hiddenValley");
    }
}

// 4: maps out the food menu items to html
function foodMenuBuild(menuItem) {
    if (menuItem.description !== null) {
        const menuHTML = `
        <div class="food-item">
            <img src="${menuItem.imgSource}" alt="${menuItem.imgAlt}">
            <h1 class="foodName">${menuItem.name}</h1>
            <ul>
                <li>${menuItem.description}</li>
                <li class="price">${menuItem.price}</li>
                <li>${menuItem.calCount}</li>
                <li>${menuItem.starCount}</li>
            </ul>
            <button class="cartAdd">Add to cart</button>
        </div> `;
        // console.log(menuItem);
        return menuHTML;
    }
}

//5: maps out the false menu
function falseMenuBuild(falseItem) {
    if (falseItem.description !== null) {
        const menuHTML = `
        <div class="food-item">
            <img src="${falseItem.imgSource}" alt="${falseItem.imgAlt}">
            <h1 class="foodName">${falseItem.name}</h1>
            <ul>
                <li>${falseItem.description}</li>
                <li class="price">${falseItem.price}</li>
            </ul>
            <button class="cartAdd">Add to cart</button>
        </div> `;
        return menuHTML;
    }
}


function addCartListeners() {
    document.querySelectorAll(".cartAdd").forEach(button => {
        button.addEventListener("click", (event) => {
            const foodPieceALL = event.target.closest(".food-item");
            const foodName = foodPieceALL.querySelector(".foodName").textContent;
            const foodPrice = foodPieceALL.querySelector(".price").textContent;
    
            const foodImage = foodPieceALL.querySelector("img");
            const foodImageSource = foodImage.src;
            const foodImageAlt = foodImage.alt;
    
            const tempArray = JSON.parse(localStorage.getItem("pollosHoldCell"));

            const cartItem = {
                name: foodName,
                price: foodPrice,
                imagesrc: foodImageSource, 
                imagealt: foodImageAlt
            }
    
            tempArray.push(cartItem);
            
            console.log(cartItem);
    
            localStorage.setItem("pollosHoldCell", JSON.stringify(tempArray));
        })
    })
}
//3: deletes and then reinserts the food menu or hidden menu
function menuFill(possNumb) {
    // const HTMLblock = foodMenu.map(item => foodMenuBuild(item));   check here
    // const HTMLblock = foodMenu.map(item => JSON.stringify(foodMenuBuild(item)));
    
     //check to see if the inner html is food or other stuff
    //this could be significantly better, it just checks for the expected first item, and acts accordingly,
    //ideally, a unique value seperating food from non-food items would be expected

    if (possNumb === 1){
        const HTMLblock = foodMenu.map(item => foodMenuBuild(item)).join(''); 
        document.querySelector("#menuHolder").innerHTML = HTMLblock;

        if (JSON.parse(localStorage.getItem("pollosHoldCell")) === null){
            const tempArray = [];
            localStorage.setItem("pollosHoldCell", JSON.stringify(tempArray));
        }
        addCartListeners();
    }
    else{
        if (document.querySelector(".foodName").textContent === "Zesty Chicken Sandwich") {
            const HTMLblock = falseMenu.map(item => falseMenuBuild(item)).join('');
            document.querySelector("#menuHolder").innerHTML = HTMLblock;
        }
        else{
            const HTMLblock = foodMenu.map(item => foodMenuBuild(item)).join('');
            document.querySelector("#menuHolder").innerHTML = HTMLblock;
        }

        addCartListeners();
        
    }
}

//2: switches the menu to the hidden menu or the real one
function passwordCheck(event) {
    event.preventDefault();
    const enteredPswrd = this.secretIng.value;

    if (enteredPswrd === "POLLOS") {
        toggleSaul(2);
        
        menuFill(2); 
        
    }
    else if (enteredPswrd === "SAUL") {
        toggleSaul(1);
    }
}

//5:add items to the cart, start with an empty cart
const cart = [];



//1: displays or hides the form when clicked
const hideOrNot = document.querySelector("#switchingButton");
hideOrNot.addEventListener("click", toggleValley);
// you don't need the parameters after the function



//2: listens for the secret ingredient to be entered
const secrtButton = document.querySelector("#secretForm");
secrtButton.addEventListener("submit", passwordCheck);
// document.querySelector("#secretForm").addEventListener("submit", passwordCheck);



//on startup, the FOOD items are added dynamically
menuFill(1);
// 5: add items to cart, via event listener
// document.querySelectorAll(".cartAdd").forEach(button => {
//     button.addEventListener("click", (event) => {
//         const foodPieceALL = event.target.closest(".food-item");
//         const foodName = foodPieceALL.querySelector(".foodName").textContent;
//         const foodPrice = foodPieceALL.querySelector(".price").textContent;

//         const foodImage = foodPieceALL.querySelector("img");
//         const foodImageSource = foodImage.src;
//         const foodImageAlt = foodImage.alt;

//         const cartItem = {
//             name: foodName,
//             price: foodPrice,
//             imagesrc: foodImageSource, 
//             imagealt: foodImageAlt
//         }

//         cart.push(cartItem);
        
//         console.log(cartItem);

//         localStorage.setItem("pollosHoldCell", JSON.stringify(cart));
//     })
// })

//add this to the menu fill, wherever the menu is being populated






