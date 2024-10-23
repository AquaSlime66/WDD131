const myButton = document.getElementById('submit');



function isMyCardValid(number) {
    return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector(".errorMsg").innerHTML = msg;
}


function submitHandler(event){
    event.preventDefault();

    let errorMessage = "";
    displayError("");

    const cardNumb = this.cardNo.value;

    console.log(cardNumb);

    if (isNaN(cardNumb)) {
        errorMessage += "Card number is not a valid number\n";
    }
    else if (!isMyCardValid(cardNumb)){
        errorMessage += "Card number is not a valid card number\n";
    }

    // if (errorMessage !== "") {
    //     displayError(errorMessage);
    //     return false
    // }


    // here we check the expiration date (year)
    let yearDate = 20;
    yearDate += this.yearEX.value;

    const realYear = new Date().getFullYear();

    if (yearDate < realYear){
        errorMessage += "Your card has expired! (check the year)";
    }


    // check the month is valid
    const monthDate = this.monthEX.value;
    const realMonth = new Date().getMonth() + 1;
    // chatGPT reccomended I add the plus 1, as it starts at 0

    if (yearDate == realYear && monthDate < realMonth){
        errorMessage += "Your card has expired! (check the month)";
    }



    if (errorMessage !== "") {
        displayError(errorMessage);
        return false
    }
    
    // const yearDate = this.yearEX.value;
    
    return true;
    
}

// myButton.addEventListener('submit', submitHandler);

//turns out the query selector should NOT select the button, but the form itself
document.querySelector('#form-direct').addEventListener("submit", submitHandler);