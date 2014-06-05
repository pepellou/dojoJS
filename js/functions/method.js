var bomb = {
    ttl: 4,
    tic: function() {
        this.ttl--;
        return (this.ttl > 0) ? this.ttl : 'BOOM';
    }
};
    
document.writeln(bomb.tic());
document.writeln(bomb.tic());
document.writeln(bomb.tic());
document.writeln(bomb.tic());
