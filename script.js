const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('click', (event) => {
        items.forEach((item) => {
            item.classList.remove('active');
        });

        event.currentTarget.classList.add('active');
    });
});

document.querySelector('.fa-xmark').addEventListener('click', ()=> {
    items.forEach((item) => {
        item.classList.remove('active');
    });
})