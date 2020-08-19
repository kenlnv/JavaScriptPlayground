const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector(".modal-outer");
const innerModal = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
    const button = e.currentTarget;
    const cards = button.closest('.card');
    const imageSrc = cards.querySelector('img').src;
    const description  = cards.dataset.description;
    const name = cards.querySelector('h2').innerHTML;
    //Add th info to modal
    innerModal.innerHTML = `
        <img src=${imageSrc.replace(200, 600)} alt="${name}">
        <p>${description}</p>
    `;

    modalOuter.classList.add('open');
}

function closeModal() {
    modalOuter.classList.remove('open');
}

function handleModalOuterClick(event){
    const isOutSide = !event.target.closest('.modal-inner');
    
    if(isOutSide) {
        closeModal();
    }
}

cardButtons.forEach(cardButton => cardButton.addEventListener('click', handleCardButtonClick));
modalOuter.addEventListener('click', handleModalOuterClick);

window.addEventListener('keydown', (event) => {
    
    if(event.key === 'Escape'){
        closeModal();
    }
});