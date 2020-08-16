// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500'
// set the width to 250
img.height = 250;
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `<div class="mydiv">
    <p>Paragraph one</p>
    <p>Paragraph two</p>
</div>
`;

const ulElement = div.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const mydiv = div.querySelector('.mydiv');
mydiv.children[1].classList.add('warning');
// remove the first paragraph
mydiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
function generatePlayerCard(name, age, height){ 
    const div = `
    <div class='playerCard'>
       <h2> ${name}— ${age}</h2>
       <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
       <button class='delete' type='button'>&times; Delete</button>
       
    </div>
    `;
    return div;
};


// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// Have that function make 4 cards
const card1 = generatePlayerCard('Mike', 15, 160);
const card2 = generatePlayerCard('Jack', 17, 150);
const card3 = generatePlayerCard('John', 12, 170);
const card4 = generatePlayerCard('Jill', 18, 155);
// append those cards to the div
cards.insertAdjacentHTML("beforeend", card1);
cards.insertAdjacentHTML("beforeend", card2);
cards.insertAdjacentHTML("beforeend", card3);
cards.insertAdjacentHTML("beforeend", card4);
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
function deleteCard(event) {
    console.log('Deleting');
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.closest('.playerCard').remove();
};
let deleteButtons = document.querySelectorAll('.delete');
console.log('adding event listener');
deleteButtons.forEach(button => button.addEventListener('click', deleteCard));
