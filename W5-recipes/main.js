import { recipes } from "./recipes.js";

// console.log(recipes);


//generate a random number
function randNumb(number) {
    return Math.floor(Math.random() * number);
}

//get a random recipe
function RandomRecipe(array) {
    const arrayLength = array.length;
    const myNumb = randNumb(arrayLength);
    return array[myNumb];
}

//make the tags in html
function tagsTemplate(tags){
    let html = ``;
    for (const tag of tags){
        html += `<li>${tag}</li>`;
    }

    return html;
}



function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 0; i < 5; i++){
		// check to see if the current index of the loop is less than our rating
        if (i <= rating){
		// if so then output a filled star
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
		// else output an empty star
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}



//recipe templates
function recipeTemplate(recipe) {
    const rateBlock = ratingTemplate(recipe.rating);
    const tagBlock = tagsTemplate(recipe.tags);

	return `<figure class="recipe">
	<img src="${recipe.image}" alt="${recipe.name}" />
	<figcaption>
		<ul class="recipe__tags">
			${tagBlock}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			${rateBlock}
		</p>
		<p class="recipe__description">
			${recipe.description}
		</p>
    </figcaption>
    </figure>`;
}



function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const recipeBlock = document.querySelector("#recipeBlock");

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join('');

	// Set the HTML strings as the innerHTML of our output element.
    recipeBlock.innerHTML += html;
}

function init() {
  // get a random recipe
  const recipe = RandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}



function filterFunction(recipe){
    const userQuery = document.querySelector("#searchForm").recipeQuery.value.toLowerCase();
    
    //returns true or false
    return recipe.name.toLowerCase().includes(userQuery) || recipe.tags.find((item) => item.toLowerCase().includes(userQuery));
}


function filterRecipes() {

    const recipeBlock = document.querySelector("#recipeBlock");
    recipeBlock.innerHTML = ``;

    event.preventDefault();
    const enteredQuery = this.recipeQuery.value;

    // console.log(enteredQuery);

    const filteredRecipes = recipes.filter(filterFunction);
    // console.log(filteredRecipes);

    //code from chatgpt, I was a little confused on how sort was organizing?
    const sortedRecipes = filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(sortedRecipes);

    renderRecipes(sortedRecipes);
    // for (const recipe in sortedRecipes){
    //     renderRecipes(recipe);
    // }



}


init();



//event listener for the search
const form = document.querySelector("#searchForm");

form.addEventListener("submit", filterRecipes);