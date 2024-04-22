let score = 0;
let img = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let random = null;

setInterval(printTopo, 1000);

function printTopo() {
    for (let i = 0; i < img.length; i++) {
        document.getElementById(img[i]).classList.remove('mole');
        document.getElementById(img[i]).classList.add('Nomole');
    }
    random = Math.trunc(Math.random() * 9) + 1;

    document.getElementById(img[random - 1]).classList.remove('Nomole');
    document.getElementById(img[random - 1]).classList.add('mole');
}

function hitTopo(total) {
    if (total == random - 1) {
        score += 10;
        document.getElementById('score').textContent = score;
        playSound();
        document.getElementById(img[total]).classList.remove('mole');
    } else {
        score -= 5;
        document.getElementById('score').textContent = score;
    }
    document.getElementById(img[total]).classList.add('Hitmole');
    setTimeout(() => {
        document.getElementById(img[total]).classList.remove('Hitmole');
    }, 300);
}

function playSound() {
    let audio = new Audio('boing.mp3');
    audio.play();
}


