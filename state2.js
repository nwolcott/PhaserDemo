demo.state2 = function () {};
demo.state2.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#00ffff';
        console.log('state2 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}