//Game state is like a scene: Title, game over, menu, etc...
var demo = {};
demo.state1 = function () {};
demo.state1.prototype = {
    preload: function () {},
    
    create: function () {
        game.stage.backgroundColor = '#000000';
        console.log('state1 running');
        
    //Preparing to add input    --Button           --When pressed  --This function, listenerContext, priority, arguments (will pass 1 as argument in changeState function below)
        /* but we don't need this because we're simplifying it with a funtion.
        game.input.keyboard.addKey(Phaser.Keyboard.RIGHT).onDown.add(changeState, null, null, 1);
        */
        
        changeStateHandler();
        
    },
    
    update: function () {}
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