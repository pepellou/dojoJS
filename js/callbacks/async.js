document.writeln('See the browser console');

function Bomb(ttl, events) {
    return {
        tic: function() {
            ttl--;
            if (ttl > 0) {
                events.onTic(ttl);
            } else {
                events.onEnd();
            }
        }
    };
}

var bomb = new Bomb(4, {
    onTic: function(value) {
        console.log(value);
    },
    onEnd: function() {
        console.log('BOOM!');
    }
});

var ticTheBomb = function() {
    bomb.tic();
    setTimeout(ticTheBomb, 1000);
};

ticTheBomb();
