demo.state7 = function () {};

var bullet, enemy;

demo.state7.prototype = {
    preload: function () {
        game.load.image('bullet', 'assets/sprites/Bullet.png');
        game.load.image('enemy', 'assets/sprites/Enemy.png');
    },
    create: function () {
        game.stage.backgroundColor = '#ff0066';
        changeStateHandler();
        
        bullet = game.add.sprite('bullet');
        enemy = game.add.sprite(centerX + 160, 1000, 'enemy');
        enemy.anchor.setTo(1);
        
                                    //X, Y, max # of particles
        var emitter = game.add.emitter(centerX, 500, 2000);
                        //If you want multiple sprites to emit, put an ['array', 'here']
                            //Sprite keys, frames to use (for spritesheets), # to generate, collision or nah?, collide with world or nah?
        emitter.makeParticles('bullet', 0, 2000, false, true);
                                //Horizontal speed, vertical speed... This is how fast they'll start.
        emitter.maxParticleSpeed.set(600, -1000);
        emitter.minParticleSpeed.set(-300, -100);
                    //Give more weight to particles
        emitter.gravity = 1000;
        
                            //How long to wait, callback function
        game.time.events.add(2000, function() {
                //Explode at once or nah?, how long to last (miliseconds), frequency of emission (miliseconds)
            emitter.start(false, 5000, 20);
                                //How often to loop, callback
            game.time.events.loop(500, function() {
                if(emitter.on) {
                    emitter.on = false;
                } else {
                    emitter.on = true;
                }
            })
        })
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}