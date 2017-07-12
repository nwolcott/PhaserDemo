demo.state7 = function () {};
demo.state7.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ff0066';
        console.log('state7 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}