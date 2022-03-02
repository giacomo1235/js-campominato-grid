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

const btnPlay = document.getElementById('play')
const eleLevel = parseInt(document.querySelectorAll('option'));

btnPlay.addEventListener('click', play);

function play() {
    if (eleLevel == 1) {
         easyLevel();
    }  else if (eleLevel == 2) {
        mediumLevel();
    } else {
        hardLevel()
    }
  // if value = 1 restituisci la function easylevel 
  // if value = 2 restituisci la function mediumlevel
  // if value = 3 restituisci la function hardlevel
}


 


