// left off at the start of step 9... here we go
// all previous steps are relatively completed

const articleHoldingCell = document.querySelector(".article-holding");

const articleChunky = [
	{
		title: 'Dune',
		date: 'July 5, 2022',
		description: 'Dune is set in the distant future in a feudal interstellar society, descended from terrestrial humans, in which various noble houses control planetary fiefs. It tells the story of young Paul Atreides, whose family accepts the stewardship of the planet Arrakis.',
		imgSrc: 'dune_2.jpg',
		imgAlt: 'Dune Frank Herbert',
		ages: '10-14',
		genre: 'Space Fantasy',
		stars: '⭐⭐⭐⭐'

	},

	{
		title: 'Butterfly and Hellflower',
		date: 'December 18, 2029',
		description:
			'The Phoenix Empire rose from the ruins of the Federation to provide its subjects with peace, order, and good government. Each subject has their duly allotted role. Butterfly St. Cyr has an unallotted but crucial role: low-level smuggler, testing to see how long it takes the Empire to notice her and execute her for multiple capital crimes.',
		imgSrc:
			'butterfly-heckflower.jpg',
		imgAlt: 'Butterfly and Heckflower',
		ages: '16-25',
		genre: 'Space Fantasy',
		stars: '⭐⭐⭐⭐'
	},

	{
		title: 'Ascension of Flesh and Steel: A Manifesto for the Unified Future',
		date: 'August 12, 2096',
		description:
			'Richard Grey outlines his vision of humanitys evolution through mutation and forced unity, arguing that only by merging the strengths of all life forms into one superior being can true survival and peace be achieved in the post-apocalyptic world.' ,
		imgSrc:
			'master-book1.webp',
		imgAlt: 'Ascension of Flesh and Steel: A Manifesto for the Unified Future',
		ages: '10-17.5',
		genre: 'Autobiography',
		stars: '⭐⭐⭐⭐⭐'
	}
]


function articleHTMLTemplate(tempArticle){
		const articleInHTMl= `
			<div class="leftbar">
                <ul>
                    <li class="date">${tempArticle.date}</li>
                    <li>${tempArticle.ages}</li>
                    <li>${tempArticle.genre}</li>
                    <li>${tempArticle.stars}</li>
                </ul>
            </div>
			<div class="book-central-bar">
                <h2>${tempArticle.title}</h2>
                <img src="${tempArticle.imgSrc}" alt="${tempArticle.imgAlt}">
                <p>${tempArticle.description}</p>
            </div>`;
	return articleInHTMl;
		
}

function articlePluralStart(articleArray){
//i did get this loop idea from ChatGPT, but the majority of the code I wrote
	articleArray.forEach(function(item, index) {
		console.log(`Item ${index}: ${item}`);
		//chat given code that works great for debugging, i didn't fully understand how foreach loops work with ranges in js, but I do in like 5 other languages

		const tempArticle = articleArray[index];
		const htmlArticle = articleHTMLTemplate(tempArticle);
		articleHoldingCell.innerHTML += htmlArticle
		
	});
//each article group IS A SINGLE ARRAY ENTRY

}


articlePluralStart(articleChunky);


// unused article template from given code in assignment
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]