// -------- DATA ------------ //

var data = {
    // Put cats into an array
    allCats: [
        {
            name: 'Xuxa',
            id: 'cat1',
            image: 'cat1.jpg',
            count: 0,
            imgID: 'cat1-image'
        },
        {
            name: 'Bashful',
            id: 'cat2',
            image: 'cat2.jpg',
            count: 0,
            imgID: 'cat2-image'
        },
        {
            name: 'Twins',
            id: 'cat3',
            image: 'cat3.jpg',
            count: 0,
            imgID: 'cat3-image'
        },
        {
            name: 'Curious',
            id: 'cat4',
            image: 'cat4.jpg',
            count: 0,
            imgID: 'cat4-image'
        },
        {
            name: 'Sleepy',
            id: 'cat5',
            image: 'cat5.jpg',
            count: 0,
            imgID: 'cat5-image'
        }
    ]
};

// -------- VIEW ------------ //

var catView = {
    showCatList: function() {
        let catList = document.querySelector('.cat-list');
        for (let i = 0; i < controller.getCats.length; i++) {
            // Add template
            let cat = controller.getCats[i];
            let catListItem = document.createElement('li'),
                template = `<a href="#">${cat.name}</a>`;
            catListItem.setAttribute('id', `#reveal-${cat.id}`);
            catListItem.innerHTML = template;
            catList.appendChild(catListItem);

            // Reveal cat on click
            catListItem.addEventListener('click', (function(catCopy) {
                return function() {
                    catView.showCat(catCopy);
                    controller.addListener(catCopy);
                };
            })(cat));
        }
    },
    showCat: function(cat) {
        // Add cat template
        const template = `
        <div class="cat" id="${cat.id}">
            <img src="img/${cat.image}" alt="" class="cat-image" id="${cat.id}-image">
            <h2>${cat.name}</h2>
            <p>Times clicked: <span id="${cat.id}-click-total">${cat.count}</span></p>
        </div>`;

        body = document.querySelector('.cat-display');
        body.innerHTML = '';
        div = document.createElement('div');
        div.innerHTML = template;
        body.appendChild(div);
    }
};

var adminView = {
    addListener: function(){
        let button = document.querySelector('.admin-button');
        button.addEventListener('click', adminView.showEdit);
    },
    showEdit: function() {
        let display = document.querySelector('.admin-display'),
            form = document.createElement('div'),
            template = `<div class="admin-form">
            <label>
                Name:
                <input type="text">
            </label>
            <label>
                URL:
                <input type="url">
            </label>
            <label>
                Clicks:
                <input type="number" min="0">
            </label>
            <p>
                <button>Save</button>
                <button>Cancel</button>
            </p>
        </div>`;
        form.setAttribute('id', 'admin-enabled');
        if (document.querySelector('#admin-enabled') == null) {
            form.innerHTML = template;
            display.appendChild(form);
        }
        else {
            return false;
        }
    }
}

// -------- CONTROLLER ------------ //

var controller = {
    init: function() {
        // Add listeners
        adminView.addListener();

        // Initialize views
        catView.showCatList();
    },
    getCats: data.allCats,
    countClicks: function(cat) {
        let clickID = `${cat.id}-click-total`,
            clickCounter = document.getElementById(clickID);
        cat.count++;
        clickCounter.textContent = cat.count;
    },
    addListener: function(cat) {
        let catDiv = document.querySelector(`#${cat.imgID}`);
        catDiv.addEventListener('click', (function(catCopy) {
            return function() {
                 controller.countClicks(catCopy);
            }
        })(cat));
    }
};

// Start app
controller.init();