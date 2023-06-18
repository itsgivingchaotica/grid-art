 document.addEventListener("DOMContentLoaded", function(){
    //get the toolbar component
    fetch('toolbar.html')
        .then(response => response.text())
        .then(data => {
        //inject the component as html 
        const toolbarElement = document.querySelector('#toolbar');
        toolbarElement.innerHTML = data;
        initUI()
        });
// fron
    function initUI(){
    var isDrawing = true;
    var colorPicker = document.getElementById('colorPicker');
    var selectedColor = colorPicker.value;
    var columnDeleteBtn = document.getElementById('decrement-column-btn');
    var columnAddBtn = document.getElementById('increment-column-btn');
    var rowDeleteBtn = document.getElementById('decrement-row-btn');
    var rowAddBtn = document.getElementById('increment-row-btn');
    var numRows = 0;
    var numCols = 0;
    var drawBtn = document.getElementById('draw-btn');
    var eraseBtn = document.getElementById('erase-btn');
    var getColorBtn = document.getElementById('get-color-btn')
    var fillRestBtn = document.getElementById('fill-rest-btn');
    var fillAllBtn = document.getElementById('fill-all-btn');
    var clearColors = document.getElementById('clear-colors-btn');
    var deleteGrid = document.getElementById('delete-grid-btn');
    var mainGrid = document.getElementById('grid-container');
    var isMouseDown = false;
    
    //EVENT HANDLERS 

    //colorpicker handler
    getColorBtn.addEventListener('click', function() {
        selectedColor = colorPicker.value;
        //set editing to draw mode, user wants to draw
        isDrawing = true;
    });

    //row delete handler 
    rowDeleteBtn.addEventListener('click', function(){
       let gridContainer = document.getElementById("grid-container");

        if(numCols!=0||numRows!=0){
        for (let i=0; i< numCols; i++){
            gridContainer.lastChild.remove();
        }
        numRows--;
        gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
    }
    if(numRows===0){
        numCols = 0;
    }
    })

     // row adding handler
   rowAddBtn.addEventListener('click', function() {
   let gridContainer = document.getElementById('grid-container');

    if(numCols===0){
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
    
        gridContainer.appendChild(cell);
        numCols++;
    }
    else{
        for (let i=0; i< numCols; i++){
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            gridContainer.appendChild(cell);
        }
    }

    numRows++;
    gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`; 
});

    //column delete handler 
    columnDeleteBtn.addEventListener('click', function(){
       let gridContainer = document.getElementById('grid-container');

    if(numCols!=0||numRows!=0){
        for (let i=0; i< numRows; i++){
            gridContainer.lastChild.remove();
        }
        numCols--;
        gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 
    }
    if(numCols===0){
        numRows = 0;
    }
    // grid.style.gridTemplateColumns = "repeat(3, 1fr)";

    return numCols;

    });
  
    //column adding handler
    columnAddBtn.addEventListener('click', function() {
        let gridContainer = document.getElementById('grid-container');

        if(numRows===0){
            let cell = document.createElement("div");
            cell.classList.add("grid-cell");
            gridContainer.appendChild(cell);
            numRows++;
        } else{
            for (let i=0; i< numRows; i++){
                let cell = document.createElement("div");
                cell.classList.add("grid-cell");
                gridContainer.appendChild(cell);
            }
        }
        // grid.style.gridTemplateColumns = "repeat(3, 1fr)";
        numCols++;
        gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`; 

        return numCols;
    });

    document.addEventListener("mousedown", function(){
        isMouseDown = true;
    })

    document.addEventListener("mouseup", function(){
        isMouseDown = false;
    })


    //pick draw handler
    drawBtn.addEventListener('click',function(){
        isDrawing = true;
    });

    //pick erase handler
    eraseBtn.addEventListener('click',function(){
        isDrawing = false;
    });

    mainGrid.addEventListener("mousedown", function(e) {
  // for drawing
  if (isDrawing) {
    let cell = e.target;
    if (cell.classList[0] == "grid-cell") {
      cell.style.backgroundColor = selectedColor;
    }
  }
  
  // for erasing
  else {
    let cell = e.target;
    if (cell.classList[0] == "grid-cell") {
      cell.style.backgroundColor = "";
    }
  }
});

    mainGrid.addEventListener("mouseover", function(e){
        if (isMouseDown){
            if (isDrawing){
            let cells = e.target;
            if (cells.classList[0] == "grid-cell")
                cells.style.backgroundColor = selectedColor;
        }
        else {
            let cell = e.target;
    if (cell.classList[0] == "grid-cell") {
      cell.style.backgroundColor = "";
    }
        }
        }
    });


    fillRestBtn.addEventListener('click', function(){
        let gridNodes = document.querySelectorAll(".grid-cell");
        let cells = [...gridNodes];
        for (let i = 0; i < cells.length; i++){
            if (cells[i].style.backgroundColor===""){
                cells[i].style.backgroundColor = selectedColor;
            }
        }
    });

    fillAllBtn.addEventListener('click', function(){
        let gridNodes = document.querySelectorAll(".grid-cell");
        let cells = [...gridNodes];
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = selectedColor;
        }
    });

    clearColors.addEventListener('click', function(){
        let gridNodes = document.querySelectorAll(".grid-cell");
        let cells = [...gridNodes];
        for (let i=0; i < cells.length; i++){
            cells[i].style.backgroundColor = "";
        }
    })

    deleteGrid.addEventListener('click', function() {
  let gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = "";
  numRows = 0;
  numCols = 0;
});
}
    //handler for colorpicker
    

 /* #item-i:focus { WILL HAVE TO DELETE from classList
    grid-area: erase; 
    box-shadow: 0 0 10px 5px #ffcc00 !important;
    background-color: green;
    cursor: url("images/eraser-solid.avif");
} */ 
});