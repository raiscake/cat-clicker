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
    halfieDiv = document.getElementById(halfie.imgID),
    twinsDiv = document.getElementById(twins.imgID),
    curiousDiv = document.getElementById(curious.imgID),
    sleepyDiv = document.getElementById(sleepy.imgID);

xuxaDiv.addEventListener('click', function() {
    countClicks(xuxa);
})

halfieDiv.addEventListener('click', function() {
    countClicks(halfie);
});

twinsDiv.addEventListener('click', function() {
    countClicks(twins);
});

curiousDiv.addEventListener('click', function() {
    countClicks(curious);
});

sleepyDiv.addEventListener('click', function() {
    countClicks(sleepy);
});