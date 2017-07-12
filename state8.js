demo.state8 = function () {};
demo.state8.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#00ff00';
        console.log('state8 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}