demo.state3 = function () {};

var red, barrel, velocity = 1000, bullets, bullet, nextFire = 0, fireRate = 200, enemy, shoot, kill, music;

demo.state3.prototype = {
    preload: function () {
        game.load.tilemap('red_map', 'assets/tiles/red.json');
        game.load.image('red', 'assets/tiles/red.png');
        game.load.image('smile', 'assets/sprites/smile.png');
        game.load.image('bullet', 'assets/sprites/bullet.png');
        game.load.image('cannon_base', 'assets/sprites/cannon_base.png');
        game.load.image('cannon_barrel', 'assets/sprites/cannon_barrel.png');
        game.load.audio('shoot', 'assets/sounds/shoot.wav');
        game.load.audio('kill', 'assets/sounds/kill.wav');
        game.load.audio('music', 'assets/sounds/crime_tune.wav');
        
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        shoot = game.add.audio('shoot');
        shoot.addMarker('shoot', 0, 1);
        kill = game.add.audio('kill');
        kill.addMarker('kill', 0, 1);
        music = game.add.audio('music');
        music.addMarker('music', 0, 30);
        
        changeStateHandler();
        
        var base = game.add.sprite(centerX, centerY, 'cannon_base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.5, 0.5);
        
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
                            //How many, key of sprite
        bullets.createMultiple(50, 'bullet');
                    //All bullets in group will do something on exiting world bounds.
        bullets.setAll('checkWorldBounds', true);
                    //Eliminate self after leaving world.
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 0.2);
        bullets.setAll('scale.y', 0.2);
        
        barrel = game.add.sprite(centerX, centerY, 'cannon_barrel');
        barrel.anchor.setTo(0.5);
        barrel.scale.setTo(0.5, 0.5);
        
                        //Groups are good if you ahve many sprites that are similar to each other.
        
        
        
        var map = game.add.tilemap('red_map');
        map.addTilesetImage('red');
        
        red = map.createLayer('red');
        
        map.setCollisionBetween(0, 1, 'red');
        
        smile = game.add.sprite(200, 200, 'smile');
        smile.scale.setTo(0.3, 0.3);
        game.physics.enable(smile);
        
        enemy = game.add.sprite(100, 200, 'smile');
        game.physics.enable(enemy);
        
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (i = 0; i < 5; i++) {
                            //X, Y, sprite to use
            enemyGroup.create(1000, 100 * i, 'smile');
        }
        
    },
    
    update: function () {
        
        music.play('music');
        
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        if(game.input.activePointer.isDown) {
            this.fire();
        }
        
                                //When this, hits this, do this
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    },
    
    fire: function () {
        if(game.time.now > nextFire) {
            nextFire = game.time.now + fireRate;
            console.log('Firing');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

                                //Sprite to aim at, speed
            game.physics.arcade.moveToPointer(bullet, velocity);

            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
            shoot.play('shoot');
           }
        
    },
    
    hitEnemy: function () {
        console.log('Hit');
        enemy.kill();
        bullet.kill();
        kill.play('kill');
    },
    hitGroup: function (b, e) {
        b.kill();
        e.kill();
        kill.play('kill');
    }
};