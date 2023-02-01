const buttonOpenModal = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
let isClicked = false;

buttonOpenModal.onclick = () => {
    modalWrapper.classList.remove('invisible');
    isClicked = true;
}

const isEscKey = (event) => {
    if(event.key === 'Escape' && isClicked == true) {
        modalWrapper.classList.add('invisible');
    }
    else
        return 0;
}

document.addEventListener('keydown', isEscKey);