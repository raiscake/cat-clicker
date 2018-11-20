var kitten = document.querySelector('.cat-image'),
    count = 0,
    countClicks = function() {
        var clickCounter = document.querySelector('#click-total');
        count++;
        clickCounter.textContent = count;
    };

 kitten.addEventListener('click', countClicks);