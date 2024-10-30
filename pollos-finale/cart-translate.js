function templateCreator(item){
    if (item.name !== null){
        const returnBlock = `
            <div class="cartBlock">
                <img src="${item.imagesrc}" alt="${item.imagealt}">
                <div class="notesBox">
                    <h1>${item.name}</h1>
                    <h2>${item.price}</h2>
                </div>
                <button class="removeFromCart">Remove</button>
            </div>`
        return returnBlock;
    }
}

function cartDisplay() {
    const tempArray = JSON.parse(localStorage.getItem("pollosHoldCell"));
    // console.log(tempArray);

    const insertBlock = tempArray.map(item => templateCreator(item)).join('');
    document.querySelector("#cart-content").innerHTML = insertBlock;
    removeItem();
}


cartDisplay();


function removeItem(){
    document.querySelectorAll(".removeFromCart").forEach(button => {
        button.addEventListener("click", (event) => {
            //selects the name of the item 
            const boxSelector = event.target.closest(".cartBlock");
            const itemName = boxSelector.querySelector("h1").textContent;

            console.log(itemName);

            const tempArray = JSON.parse(localStorage.getItem("pollosHoldCell"));
            const transferCell = [];

            tempArray.forEach(menuItem => {
                if (menuItem.name != itemName){
                    transferCell.push(menuItem);
                }
                localStorage.setItem("pollosHoldCell", JSON.stringify(transferCell));
                cartDisplay();
            });
        })
    })

}