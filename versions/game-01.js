// Inject Comments
window.onload = function() {
    var gameDescription = "<p>Initialises the Game</p><p>Loads a background from an image or default color</p>";
    document.getElementsByClassName('sidebar')[0].innerHTML = gameDescription;
}

Crafty.init(800, 600, document.getElementById('gamecanvas'));

initialiseGame();

function initialiseGame() {
    loadBackground();
}

function loadBackground() {
    Crafty.background('#3BB9FF');
    Crafty.background('#FFFFFF url(img/bg.png) repeat-x center center');
}
