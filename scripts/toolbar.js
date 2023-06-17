 document.addEventListener("DOMContentLoaded", function(){
    //get the toolbar component
    fetch('toolbar.html')
        .then(response => response.text())
        .then(data => {
        //inject the component as html 
        const toolbarElement = document.querySelector('#toolbar');
        toolbarElement.innerHTML = data;
        });
 })
 