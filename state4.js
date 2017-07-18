demo.state4 = function () {};

var select, shoot, kill, death, music;

demo.state4.prototype = {
    preload: function () {
        game.load.image('button1', 'assets/sprites/button1.png');
        game.load.image('button2', 'assets/sprites/button2.png');
        game.load.image('button3', 'assets/sprites/button3.png');
        game.load.audio('select', 'assets/sounds/select.wav');
        game.load.audio('shoot', 'assets/sounds/shoot.wav');
        game.load.audio('kill', 'assets/sounds/kill.wav');
        game.load.audio('death', 'assets/sounds/death.wav');
        game.load.audio('music', 'assets/sounds/crime_tune.wav');
    },
    create: function () {
        game.stage.backgroundColor = '#ffff66';
        
        select = game.add.audio('select');
        shoot = game.add.audio('shoot');
        kill = game.add.audio('kill');
        death = game.add.audio('death');
        music = game.add.audio('music');
        
                    //key, start, end <-- In seconds
        select.addMarker('select', 0, 1);
        
        var b1 = game.add.button(100, 100, 'button1', function() {changeState(null, 1)});
        var b2 = game.add.button(300, 300, 'button2', function() {changeState(null, 2)});
        var b3 = game.add.button(500, 500, 'button3', function() {changeState(null, 3)});
        
        changeStateHandler();
        
            //When input is placed: function, context
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);
        
    },
    
    update: function () {
        
    },
    
    tint: function () {
        this.tint = 0xbbbbbb;
        select.play('select');
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}