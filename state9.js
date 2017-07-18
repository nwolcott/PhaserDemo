var text;

WebFontConfig = {
    google: {families: ['Bellefair'] }
};

demo.state9 = function () {};
demo.state9.prototype = {
    preload: function () {
                    //This is a script to allow you to execute font-loading commands provided by google.
        game.load.script('webfont', 'fonts.googleapis.com/css?family=Bellefair');
    },
    create: function () {
        game.stage.backgroundColor = '#99e6e6';
        changeStateHandler();
        
        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                    //X, Y, text, (in this case) an object further describing text
        game.add.text(centerX, centerY, "Hello World", {fontSize: '100px', fill: '#fff'});
        
        this.spellOutText(100, 100, 1000, text, 30, 40, '#fff', 'Bellefair')
        
    },
    
    spellOutText: function (x, y, width, text, fontSize, speed, fill, font) {
        var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        var currentLine = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font: font});
        var loop = game.time.events.loop(speed, addChar);
        var index = 0;
        
        currentLine.alpha = 0;
        
        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];
            if (currentLine.width > width && text[index] == ' ') {
                sentence.text += '\n';
                currentLine.text = '';
            }
            
            index++;
            
            if (text[index] >= text.length - 1) {
                            //You can remove timed events
                game.time.events.remove(loop);
            }
            
        }
    }
};

function changeState(i, stateNum) {
    console.log(i);
    game.state.start('state' + stateNum);
}