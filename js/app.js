// Add cats
const xuxa = {
    name: 'Xuxa',
    id: 'cat1',
    image: 'cat1.jpg',
    count: 0,
    imgID: 'cat1-image'
};

const halfie = {
    name: 'Halfie',
    id: 'cat2',
    image: 'cat2.jpg',
    count: 0,
    imgID: 'cat2-image'
};

// Put cats into an array
const allCats = [xuxa, halfie];

// Place cat divs
function placeDiv(cat) {
    const template = `
    <div class="cat" id="${cat.id}">
        <img src="img/${cat.image}" alt="" class="cat-image" id="${cat.id}-image">
        <p>Times clicked: <span id="${cat.id}-click-total">0</span></p>
    </div>`;

    body = document.querySelector('body');
    div = document.createElement('div');
    div.innerHTML = template;
    body.appendChild(div);
}


for(let i = 0; i < allCats.length; i++) {
    let cat = allCats[i];
    placeDiv(cat);
}

// Count clicks
function countClicks(cat) {
    let clickID = `${cat.id}-click-total`,
        clickCounter = document.getElementById(clickID);
    cat.count++;
    clickCounter.textContent = cat.count;
}

const xuxaDiv = document.getElementById(xuxa.imgID),
    halfieDiv = document.getElementById(halfie.imgID);

xuxaDiv.addEventListener('click', function() {
    countClicks(xuxa);
})

halfieDiv.addEventListener('click', function() {
    countClicks(halfie);
});