const myName = "Joe Schmoe";

// put into local storage
localStorage.setItem("name", myName);
//                     key    stored string


// retrieve from local storage
const storedName = localStorage.getItem("name");

console.log(storedName);

const myArray = [
    {
        personname: "pookie",
        profession: "lawyer"
    }
    
];

localStorage.setItem("myArray1", JSON.stringify(myArray));
//                     key                      array variable

const arrayFromLS = JSON.parse(localStorage.getItem("myArray1"));
// may be easier to write these JSON statements as a few functions and just pass the keys and variables into
