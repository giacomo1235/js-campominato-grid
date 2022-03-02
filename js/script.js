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
}



