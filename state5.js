demo.state5 = function () {};
demo.state5.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ffff00';
        console.log('state5 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}