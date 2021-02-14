var back = document.querySelector('.container');
var text = document.getElementById('per');


var load = 0;

var int = setInterval(blurring, 20);

function blurring() {
    load++;
    if(load === 100) {
        clearInterval(int)
    }
    text.textContent = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    back.style.filter ='blur(0px)';
}
const scale = (num, in_min, in_max, out_min, out_max) =>{
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}