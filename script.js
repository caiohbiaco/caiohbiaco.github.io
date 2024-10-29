let rotationDegree = 0;

function rotateElement() {
    rotationDegree +=45;
    document.getElementById('rotating-div').style
    .transform = `rotate(${rotationDegree}deg)`;
}

function toggleFade() {
    const div = document.getElementById('fading-div');
    div.classList.toggle('visible');
}

function togglePulse() {
    const div = document.getElementById('pulsing-div');
    div.classList.toggle('pulsing');
}

function zoomIn() {
    const div = document.getElementById('zooming-div');
    div.classList.add('zooming');
}