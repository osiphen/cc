var config = {
    type: Phaser.WEBGL,
    width: window.outerWidth,
    height: window.innerHeight,
    parent: "client",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 700 },
            debug: false
        }
    },
    dom: {
        createContainer: true
    },
    scene: Main
};

var game = new Phaser.Game(config)
Game.instance = game

