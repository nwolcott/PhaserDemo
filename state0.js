demo.state0 = function () {};
demo.state0.prototype = {
    preload: function () {

    },
    create: function () {
        game.stage.backgroundColor = '#ffffff'; 
        changeStateHandler();
        
    },
    
    update: function () {
        
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}