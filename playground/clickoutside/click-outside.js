const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector(".modal-outer");
const innerModal = document.querySelector('.modal-inner');

function handleClick(e) {
    const button = e.currentTarget;
    const cards = button.closest('.card');
    const imageSrc = cards.querySelector('img').src;
    const description  = cards.dataset.description;
    const name = cards.querySelector('h2').innerHTML;
    //Add th info to modal
    innerModal.innerHTML = `
        <img src=${imageSrc.replace(200, 600)} alt="${name}">
        <h2>${description}</h2>
    `;

    modalOuter.classList.add('open');
}

cardButtons.forEach(cardButton => cardButton.addEventListener('click', handleClick));
