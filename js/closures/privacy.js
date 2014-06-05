var bomb = {
    ttl: 4,
    tic: function() {
        this.ttl--;
        return (this.ttl > 0) ? this.ttl : 'BOOM';
    }
};
    
document.writeln(bomb.tic());
bomb.ttl = 1;
document.writeln(bomb.tic());

bomb = function() {
    var ttl = 4;
    return {
        tic: function() {
            ttl--;
            return (ttl > 0) ? ttl : 'BOOM';
        }
    };
}();
    
document.writeln(bomb.tic());
bomb.ttl = 1;
document.writeln(bomb.tic());
