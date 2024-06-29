const bulbOn = document.getElementById('bulb-On');
const btn = document.getElementById('toggle-bulb');

function onBulb(e){
    // const bulbOn = document.getElementById('bulb-On');
    bulbOn.style.display = bulbOn.style.display === 'none'? 'block' : 'none';
}


// btn.addEventListener('click', ( )=> {
//     bulbOn.style.display = bulbOn.style.display === 'none'? 'block' : 'none';
// });