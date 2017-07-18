demo.state5 = function () {};

var i;

demo.state5.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ffff00';
        
        a1 = game.add.sprite(100, 100, 'smile');
        a2 = game.add.sprite(400, 100, 'smile');
        a3 = game.add.sprite(700, 100, 'smile');
        a4 = game.add.sprite(1000, 100, 'smile');
        
                //Tween usually take objects, but can take any
                    //(Object).changingFunction, lenth in miliseconds, pattern of change (easings), start automatically or nah, delay, times to repeat, yo-yo or no
        game.add.tween(a1).to({alpha: 0}, 2000, 'Circ.easeOut', true);
        game.add.tween(a2).to({y: '+500', x: 800}, 1000, 'Bounce', true);
                                //Start at specified area and return to original
        game.add.tween(a3).from({y: 500, x: 800}, 1000, 'Elastic.easeOut', true);
                        //This is for modifying object properties?
        game.add.tween(a4.anchor).to({y: 1, x: 1}, 1000, 'Linear', true, 1000, false, true).loop(true);
                    /* If you want to loop infinitely
        game.add.tween(a4.anchor).to({y: 1, x: 1}, 1000, 'Linear', false (repeating), 1000, 3, true).loop(true);
        */
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}