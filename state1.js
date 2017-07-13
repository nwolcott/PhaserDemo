//Game state is like a scene: Title, game over, menu, etc...
var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, smile, forest, speed = 8;

demo.state1 = function () {};
demo.state1.prototype = {
    preload: function () {
                        //Name, Location, frame width, frame height
        game.load.spritesheet('smile', 'assets/spritesheets/smile-walk.png', 320, 320);
        game.load.image('forest', 'assets/backgrounds/forest-background.png');
    },
    
    create: function () {
            //If you're gonna use physics, start them at the BEGINNING of your create function.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#f0f0f0';
        console.log('state1 running');
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //Set boundaries of world
        game.world.setBounds(0, 0, 2813, 1000);
        
        forest = game.add.sprite(0, 0, 'forest');
        
                                    //X, Y, Name        SPRITES ARE DRAWN FROM TOP LEFT CORNER
        smile = game.add.sprite(centerX, centerY, 'smile');
            //Set anchor in middle instead of top left.
        smile.anchor.x = 0.5;
        smile.anchor.y = 0.5;
        smile.scale.setTo(0.75, 0.75);
        
        game.physics.enable(smile);
        smile.body.collideWorldBounds = true;
        
        smile.animations.add('walk', 0, 1, 2, 3)
        
        game.camera.follow(smile);
                                            //origin X, origin Y, width, height
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, centerY - 0, 600, 1000);
        changeStateHandler();
        
    },
    
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            smile.scale.setTo(-0.75, 0.75);
            smile.x += speed;
                        //Animation name, frame rate, loop
            smile.animations.play('walk', 12, true);
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            smile.scale.setTo(0.75, 0.75);
            smile.x -= speed;
            smile.animations.play('walk', 12, true);
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            smile.y -= speed;
            if(smile.y < 340) {
                smile.y = 340;
            }
            smile.animations.play('walk', 12, true);
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            smile.y += speed;
            smile.animations.play('walk', 12, true);
        } else {
            smile.animations.stop('walk');
            smile.frame = 0;
        }
    }
};
    
            //Phaser passes the 1 from 'adding-function code' alongside other arguments. We log i just for giggles.

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function changeStateHandler() {
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}