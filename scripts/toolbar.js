 document.addEventListener("DOMContentLoaded", function(){
    //get the toolbar component
    fetch('toolbar.html')
        .then(response => response.text())
        .then(data => {
        //inject the component as html 
        const toolbarElement = document.querySelector('#toolbar');
        toolbarElement.innerHTML = data;
        });

    const colorPicker = document.getElementById('colorPicker');

 });

 /* #item-i:focus { WILL HAVE TO DELETE from classList
    grid-area: erase; 
    box-shadow: 0 0 10px 5px #ffcc00 !important;
    background-color: green;
    cursor: url("images/eraser-solid.avif");
} */ 
 