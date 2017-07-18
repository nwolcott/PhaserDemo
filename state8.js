var arrow, startX, startY, endX, endY, swipeDirection;

demo.state8 = function () {};
demo.state8.prototype = {
    preload: function () {
        game.load.image('arrow', 'assets/sprites/arrow.png');
    },
    create: function () {
        game.stage.backgroundColor = '#00ff00';
        changeStateHandler();
        
        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);
        
        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection);
        
    },
    
    update: function () {
        
        
    },
    
    startSwipe: function() {
        console.log(game.input.x + ' ' + game.input.y);
        startX = game.input.x;
        startY = game.input.y;
    },
    
    getSwipeDirection: function() {
        console.log(game.input.x + ' ' + game.input.y);
        endX = game.input.x;
        endY = game.input.y;
        
        if(Math.abs(endX - startX) < 10 && Math.abs(endY - startY) < 10) {
            return false;
        }
        
        if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
            console.log('Horizontal');
            if (endX > startX) {
                swipeDirection = 0;
            } else {
                swipeDirection = 180;
            }
        } else {
            console.log('Vertical');
            if (endY > startY) {
                swipeDirection = 90;
            } else {
                swipeDirection = -90;
            }
        }
        
        
        arrow.angle = swipeDirection;
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}