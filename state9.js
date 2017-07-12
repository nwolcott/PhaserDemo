demo.state9 = function () {};
demo.state9.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ff0000';
        console.log('state9 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}