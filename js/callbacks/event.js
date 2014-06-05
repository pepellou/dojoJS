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
        document.writeln(value);
    },
    onEnd: function() {
        document.writeln('BOOM!');
    }
});

bomb.tic();
bomb.tic();
bomb.tic();
bomb.tic();

document.writeln('==============');

setTimeout(bomb.tic, 20000);
