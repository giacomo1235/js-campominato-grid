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

/* const btnPlay = document.getElementById('play');
const eleLevel = document.querySelectorAll('option');

btnPlay.addEventListener('click', play);

function play() {
    const eleLevel = document.querySelectorAll('option').value;
    if (eleLevel == 1) {
         easyLevel();
    }  else if (eleLevel == 2) {
        mediumLevel();
    } else {
        hardLevel()
    }
} */

function changeLevel() {
    var select = document.getElementById('change');
	var option = select.options[select.selectedIndex].value;
    console.log(option)
    if (option == 1) {
        easyLevel();
   }  else if (option == 2) {
       mediumLevel();
   } else {
       hardLevel()
   }
}


 


