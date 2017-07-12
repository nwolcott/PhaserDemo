demo.state3 = function () {};
demo.state3.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#0000ff';
        console.log('state3 running');
        
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}