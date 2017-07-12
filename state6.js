demo.state6 = function () {};
demo.state6.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ff6666';
        console.log('state6 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}