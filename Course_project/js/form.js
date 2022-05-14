let popupBg = document.querySelector('.popup__bg'); 
let popup = document.querySelector('.popup'); 
let openPopupButtons = document.querySelectorAll('.open-popup'); 
let closePopupButton = document.querySelector('.close-popup'); 

openPopupButtons.forEach((button) => { 
    button.addEventListener('click', () => {
        popupBg.classList.add('active'); 
        popup.classList.add('active'); 
    })
});

closePopupButton.addEventListener('click',() => {
    // обработчик на крестик
    popupBg.classList.remove('active'); 
    popup.classList.remove('active'); 
});

document.addEventListener('click', (e) => {
    // обработчик на весь документ
    if(e.target === popupBg) { 
        popupBg.classList.remove('active'); 
        popup.classList.remove('active'); 
    }
});