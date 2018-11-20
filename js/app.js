// Instantiate Cat object
var Cat = function(name, id, image, clicks = 0) {
    name = this.name,
    id = this.id,
    image = this.image,
    clicks = this.clicks
};

// Add cats
var xuxa = new Cat('Xuxa', 'cat1', 'cat1.jpg');
var halfie = new Cat('Halfie', 'cat2', 'cat2.jpg');

// Place cat divs
var template = `
    <div class="cat" id="${id}">
        <img src="${image}" alt="" class="cat-image" id="${id}-image">
        <p>Times clicked: <span id="${id}-click-total">0</span></p>
    </div>`;


// Count clicks
function countClicks() {
    var clickCounter = document.querySelector('#click-total');
    count++;
    clickCounter.textContent = count;
}

// kitten.addEventListener('click', countClicks);