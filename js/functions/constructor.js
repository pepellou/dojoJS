function Bomb(ttl) {
    this.ttl = ttl;
    this.tic = function() {
        this.ttl--;
        return (this.ttl > 0) ? this.ttl : 'BOOM';
    };
};

var bomb = new Bomb(4);
    
document.writeln(bomb.tic());
document.writeln(bomb.tic());
document.writeln(bomb.tic());
document.writeln(bomb.tic());
