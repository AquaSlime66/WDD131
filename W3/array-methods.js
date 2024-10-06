//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
    //the html string made from step
    //maybe just put step straight into the function
}

const stepsHTML = steps.map(listTemplate);
//map runs similar to a for each loop, running each array item/object against the template function
// const stepsHtml = steps.map(function listTemplate(
    
    // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHTML.join("");// set the innerHTML
  
// listTemplate(steps[0]);


//letter grades
const letterGrades = ['A', 'B', 'A'];

function gradeTranslate(grade) {
    if (grade === 'A')
    {
        return 4;
    }
    else if (grade === 'B')
    {
        return 3;
    }
}

const gradeChange = letterGrades.map(gradeTranslate);


//reduce activities
const numberGrades = gradeChange.reduce(function (total, item) {
    return total + item;
});

const gpa = numberGrades / gradeChange;


//filter activities
const fruityList = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const refinedFruit = fruityList.filter((fruit) => fruit.length > 6);
//the fruit variable, aka word in other examples is decalred right then, think of it as an i index

console.log(refinedFruit);


//indexOf activities
const numbers38 = [12, 34, 21, 54];
const lucky38 = 21;

console.log(numbers38.indexOf(21));
//OR
let luckyIx = numbers38.indexOf(lucky38);