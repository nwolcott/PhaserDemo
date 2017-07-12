demo.state4 = function () {};
demo.state4.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ffff66';
        console.log('state4 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}