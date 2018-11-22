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

const twins = {
    name: 'Twins',
    id: 'cat3',
    image: 'cat3.jpg',
    count: 0,
    imgID: 'cat3-image'
};

const curious = {
    name: 'Curious',
    id: 'cat4',
    image: 'cat4.jpg',
    count: 0,
    imgID: 'cat4-image'
};

const sleepy = {
    name: 'Sleepy',
    id: 'cat5',
    image: 'cat5.jpg',
    count: 0,
    imgID: 'cat5-image'
};

// Put cats into an array
const allCats = [xuxa, halfie, twins, curious, sleepy];

// Build cat list
function buildList() {
    let catList = document.querySelector('.cat-list');
    for (cat of allCats) {
        // Add template
        let catListItem = document.createElement('li'),
            template = `<a href="#">${cat.name}</a>`;
        catListItem.setAttribute('id', `#reveal-${cat.id}`);
        catListItem.innerHTML = template;
        catList.appendChild(catListItem);

        // Reveal cat on click
        //let catLinkID = catListItem.getAttribute('id'),
        //    catLink = document.querySelector(catLinkID);
        catListItem.addEventListener('click', (function(catCopy) {
            return function() {
                placeDiv(catCopy);
                addListener(catCopy);
            };
        })(cat));
    }
}

window.addEventListener('load', function () {
    buildList();
}, false);


// Place cat divs
function placeDiv(cat) {
    // Add cat template
    const template = `
    <div class="cat" id="${cat.id}">
        <img src="img/${cat.image}" alt="" class="cat-image" id="${cat.id}-image">
        <p>Times clicked: <span id="${cat.id}-click-total">${cat.count}</span></p>
    </div>`;

    body = document.querySelector('.cat-display');
    body.innerHTML = '';
    div = document.createElement('div');
    div.innerHTML = template;
    body.appendChild(div);


}

// Count clicks
function countClicks(cat) {
    let clickID = `${cat.id}-click-total`,
        clickCounter = document.getElementById(clickID);
    cat.count++;
    clickCounter.textContent = cat.count;
}

// Add click listener
function addListener(cat) {
    let catDiv = document.querySelector(`#${cat.imgID}`);
    catDiv.addEventListener('click', (function(catCopy) {
        return function() {
             countClicks(catCopy);
        }
    })(cat));
}