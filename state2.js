demo.state2 = function () {};

var grass, cursors, vel = 500, thing;

demo.state2.prototype = {
    preload: function () {
            //load TILEMAP then TILESETS
        game.load.tilemap('field', 'assets/tiles/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass-rock', 'assets/tiles/grass-rock.png');
        game.load.image('thing', 'assets/tiles/thing.png');
        game.load.image('smile', 'assets/sprites/smile.png');
        
    },
    create: function () {
            //THis is redundant because we already declared physics in state1.js
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        changeStateHandler();
        
            //CREATING MAP
        var map = game.add.tilemap('field');
        map.addTilesetImage('grass-rock');
        map.addTilesetImage('thing');
        
            //CREATING LAYERS (drawn in order or creation)
        grass = map.createLayer('grass-rock');
        thing = map.createLayer('thing');
        
                //Look for index numbers of respective tiles in your JSON file
                        //Index range of collision, collide or nah, name of collision
        map.setCollisionBetween(0, 2, true, 'grass-rock');
        map.setCollisionBetween(0, 11, true, 'thing');
        
        
                            //x, y, name
        smile = game.add.sprite(200, 200, 'smile');
        smile.scale.setTo(0.25, 0.25);
        game.physics.enable(smile);
        
                        //This creates keys for UP, DOWN, LEFT & RIGHT
        cursors = game.input.keyboard.createCursorKeys();
    },
    
    update: function () {
                                //Colliding var, colliding var, callback (This one's called an anonymous function)
        game.physics.arcade.collide(smile, grass, function(){ console.log('Colliding with grass'); });
        game.physics.arcade.collide(smile, thing, function(){ console.log('Colliding with things'); });
        
        if(cursors.up.isDown){
            smile.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            smile.body.velocity.y = vel;
        }
        else{
            smile.body.velocity.y = 0;
        }
        
        if(cursors.left.isDown){
            smile.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            smile.body.velocity.x = vel;
        }
        else{
            smile.body.velocity.x = 0;
        }
    }
};
