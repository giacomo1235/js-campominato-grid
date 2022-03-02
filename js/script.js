let areaNumbers = document.querySelector('.area-numbers');

function easyLevel(){
    for (let i = 1; i <= 100; i++) {
        areaNumbers.innerHTML += `<div class= "box">${i}</div>`
    };
};


function mediumLevel(){
    for (let i = 1; i <= 81; i++) {
        areaNumbers.innerHTML += `<div class= "box">${i}</div>`
    };
}

function hardLevel(){
    for (let i = 1; i <= 49; i++) {
        areaNumbers.innerHTML += `<div class= "box">${i}</div>`
    };
};


function changeLevel() {

    var select = document.getElementById('change');
	var option = select.options[select.selectedIndex].value;

    if (option == 1) {
        areaNumbers.innerHTML = '';
        easyLevel();
   }  else if (option == 2) {
    areaNumbers.innerHTML = '';
       mediumLevel();
   } else {
       areaNumbers.innerHTML = '';
       hardLevel();
   }
};


 


