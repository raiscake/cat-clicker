// Add cats
const xuxa = {
    name: 'Xuxa',
    id: 'cat1',
    image: 'cat1.jpg',
    count: 0
};

const halfie = {
    name: 'Halfie',
    id: 'cat2',
    image: 'cat2.jpg',
    count: 0
};

// Put cats into an array
const allCats = [xuxa, halfie];

// Place cat divs
function placeDiv(cat) {
    const template = `
    <div class="cat">
        <img src="img/${cat.image}" alt="" class="cat-image" id="${cat.id}">
        <p>Times clicked: <span id="${cat.id}-click-total">0</span></p>
    </div>`;

    body = document.querySelector('body');
    div = document.createElement('div');
    div.innerHTML = template;
    body.appendChild(div);
}

for(let cat of allCats) {
    placeDiv(cat);
    console.log(cat.id);
}


// Count clicks
function countClicks(cat) {
    var clickCounter = document.getElementById(cat.id);
    count++;
    clickCounter.textContent = count;
}

// kitten.addEventListener('click', countClicks);