demo.state6 = function () {};

var accel = 800, platform, platformGroup;

demo.state6.prototype = {
    preload: function () {
        game.load.image('platform', 'assets/sprites/platform.png');
        game.load.spritesheet('smile', 'assets/spritesheets/smile-walk.png', 320, 320);
        
    },
    create: function () {
        game.stage.backgroundColor = '#ff6666';
        
        changeStateHandler();
        
            //REMEMBER TO CREATE YOUR SPRITES AS VARIABLES!
        smile = game.add.sprite(100, 100, 'smile');
        platform = game.add.sprite(800, 800, 'platform');
        platformGroup = game.add.group();
        
        platformGroup.create(1200, 800, 'platform');
        platformGroup.create(100, 800, 'platform');
        
                    //Use VAR name, not string. Also you can declare multiple things to have phsyics using an array.
        game.physics.enable([smile, platform, platformGroup]);
        
                //Adding gravity then magnitude of. gravity.y = VERTICAL GRAVITY. gravity.x = HORIZONTAL GRAVITY
        smile.body.gravity.y = 800;
        smile.body.bounce.y = 0.3;
                //Adds friction
        smile.body.drag.x = 400;
        smile.body.collideWorldBounds = true;
        
                        //Make something immobile/ immovable
        platform.body.immovable = true;
        platformGroup.setAll('body.immovable', 'true');
        
    },
    
    update: function () {
                            //Allows collision between this, and this.
        game.physics.arcade.collide(smile, [platform, platformGroup]);
                                    //Remember what uses ALL CAPS
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            smile.body.acceleration.x = -accel;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            smile.body.acceleration.x = accel;
        } else {
            smile.body.acceleration.x = 0;
        }
        
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            smile.body.velocity.y = -500;
        }
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}