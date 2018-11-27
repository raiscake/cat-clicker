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
    ],
    shownCat: null
};

// -------- VIEW ------------ //

var catView = {
    showCatList: function() {
        let catList = document.querySelector('.cat-list');
        for (let i = 0; i < controller.getCats.length; i++) {
            // Add template
            let cat = controller.getCats[i],
                catListItem = document.createElement('li'),
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
            <h2 class="cat-name">${cat.name}</h2>
            <p>Times clicked: <span id="${cat.id}-click-total" class="cat-count">${cat.count}</span></p>
        </div>`;

        data.shownCat = cat;
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
            cat = data.shownCat,
            template = `<div class="admin-form">
            <label>
                Name:
                <input type="text" class="admin-name" value="${cat.name}">
            </label>
            <label>
                URL:
                <input type="url" class="admin-url" value="${cat.image}">
            </label>
            <label>
                Clicks:
                <input type="number" class="admin-count" min="0"  value="${cat.count}">
            </label>
            <p>
                <button class="admin-save" onclick="adminView.saveEdit()">Save</button>
                <button class="admin-cancel" onclick="adminView.cancelEdit()">Cancel</button>
            </p>
        </div>`;

        // Show form
        form.setAttribute('id', 'admin-enabled');
        if (document.querySelector('#admin-enabled') == null) {
            form.innerHTML = template;
            display.appendChild(form);
        }
        else {
            return false;
        }

    },
    saveEdit: function() {
        let display = document.querySelector('.admin-display'),
            newName = document.querySelector('.admin-name').value,
            newURL = document.querySelector('.admin-url').value,
            newCount = document.querySelector('.admin-count').value,
            cat = data.shownCat;

        // Update cat properties
        cat.name = newName;
        cat.image = newURL;
        cat.count = newCount;

        // Update cat view
        let viewName = document.querySelector('.cat-name'),
            viewURL = document.querySelector('.cat-image'),
            viewCount = document.querySelector('.cat-count');

        viewName.textContent = newName;
        viewURL.setAttribute('src', `img/${newURL}`);
        viewCount.innerHTML = newCount;

        // Hide admin
        display.innerHTML = '';
    },
    cancelEdit: function() {
        let display = document.querySelector('.admin-display');
        display.innerHTML = '';
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