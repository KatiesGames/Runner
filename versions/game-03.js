// Inject Comments
window.onload = function() {
    var gameDescription = "<p>Adds a moveable player from a sprite</p><p class='challenge'>Can you add in your sprite you have been working on?</p><p class='challenge'>Can you change the gravity and movement?</p>";

    document.getElementsByClassName('sidebar')[0].innerHTML = gameDescription;
}

const TILE_WIDTH = 80;
const TILE_HEIGHT = 60;
const GRAVITY_STRENGTH = 1000;

/* State */
var __STATE = {};
__STATE.level = 1;
__STATE.numCoinsToCollect = -1;

var _player = null;

var tileMap = [
  [[0,1],[8,1],[0,13],[4,1],[0,8],[8,1],[0,5],[4,1],[0,7],[8,1],[0,6],[8,1],[0,2]],
  [[0,8],[4,1],[0,3],[4,1],[0,6],[8,1],[0,28]],
  [[0,8],[0,24],[4,1],[0,3],[4,1],[0,6],[8,1],[0,4]],
  [[0,11],[4,1],[0,15],[4,1],[0,13],[4,1],[0,6]],
  [[0,16],[8,1],[0,19],[8,1],[0,11]],
  [[0,9],[4,1],[0,38]],
  [[0,48]],
  [[1,48]]
];

Crafty.init(800, 600, document.getElementById('gamecanvas'));

var assets = {'tiles': ['img/tile-1.png', 'img/cobble1.png', 'img/platformx2.png']};
var playerSprite = { 'sprites': { 'img/main_charachter.png': { tile: 64, tileh: 75, map: { man_left: [0,0], man_right: [0, 0], jump_right: [1, 0] } } } };

initialiseGame();

function initialiseGame () {
  Crafty.load(assets, function(){
    loadBackground();
    loadSprites();
    generateMap();
    spawnEntities();
  });
}

function loadBackground () {
  Crafty.background('#3BB9FF');
  Crafty.background('#FFFFFF url(img/bg.png) repeat-x center center');
}

function loadSprites () {
  Crafty.load(playerSprite);
}

function spawnEntities () {
  spawnPlayer();
}

function spawnPlayer (){
  _player = Crafty.e('Player, 2D, DOM, man_right, SpriteAnimation, Twoway, Collision, Gravity, Tween, Keyboard')
    .attr({x: 50,y: 263})
    .twoway(200, 510)
    .gravity('FloorTile')
    .gravityConst(GRAVITY_STRENGTH);
}

function generateMap () {
  const Y_OFFSET = 600 - (tileMap.length * TILE_HEIGHT);
  tileMap.map(function (tileRow, rowIdx) {
    var xPos = 0;
    var yPos = 0;
    tileRow.map(function (tile, tileIdx) {
      yPos = Y_OFFSET + (rowIdx * 60);
      var tileType = tile[0];
      var tileNum = tile[1];
      if (tileType === 0){
        xPos += (tileNum * 80);
      }
      if (tileType === 1) {
        for(var i=0; i < tileNum; i++){
          Crafty.e('FloorTile, 2D, DOM, Image, Collision')
            .attr({ x: xPos, y: yPos, w: TILE_WIDTH, h: TILE_HEIGHT })
            .image(Crafty.assets['img/tile-' + tileType + '.png'].src);
          xPos += 80;
        }
      }
      else{
        if (tileType === 4) {
          Crafty.e('Platform')
            .setImage('img/platform.png')
            .setPlatform(xPos, yPos, 1)
            .addCoins(Crafty.math.randomInt(1,2));
        }
        else if (tileType === 8) {
          Crafty.e('Platform')
            .setImage('img/platformx2.png')
            .setPlatform(xPos, yPos, 2)
            .addCoins(Crafty.math.randomInt(1,2));
        }
        xPos += 80;
      }
    });
  });
}
