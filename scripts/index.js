document.addEventListener('DOMContentLoaded', function() {
    var mainTextContainer = document.querySelector('.main-container .main-text');
    var menu = document.querySelector('.main-container .fa-rectangle-xmark');
    var gridContainer = document.getElementById('grid-container');
    var isHidden = false;
    var mainText = document.querySelectorAll('.main-container .main-text p')
    var pContent = [];

    menu.addEventListener('click', function() {
        //put the text back
        if (isHidden) {
            menu.classList.remove('fa-bars');
            menu.classList.add('fa-xmark');
            menu.className = 'fa-regular fa-rectangle-xmark';
            mainText.forEach(function(container) {
                mainText.forEach(function(p,index){
                    var pElement = document.createElement('p');
                    pElement.textContent = pContent[index];
                    container.appendChild(pElement);
                });
            });
            mainTextContainer.style.flexBasis = "25%";
            mainTextContainer.style.flexGrow = "1";
            gridContainer.style.flexBasis = "50%";
            gridContainer.style.flexGrow = "1";
     // Set flexBasis to 25% to show the text in format
        } else {
            //remove all text, but store first
            pContent = Array.from(mainText).map(function(p) {
                return p.textContent;
            });
            menu.classList.remove('fa-rectangle-xmark');
            menu.classList.add('fa-bars');
            menu.className = 'fas fa-bars';
            mainText.forEach(function(container) {
        container.innerHTML = '';
      });
      mainTextContainer.style.flexBasis = "0%";
      mainTextContainer.style.flexGrow = "0";
      gridContainer.style.flexBasis = "75%";
      gridContainer.style.flexGrow = "2";
     // Set flexBasis to o% to make room for more grid 
        }
        isHidden = !isHidden;
    });
});