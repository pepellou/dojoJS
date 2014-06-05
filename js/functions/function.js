function tic(n) {
    return (n > 1) ? n - 1 : 'BOOM';
}

document.writeln(tic(2));
document.writeln(tic(1));

function whatsThis() {
    return this;
}

document.writeln(whatsThis());

var rectangle = {
    from_x: 1,
    to_x: 10,
    from_y: 2,
    to_y: 5,
    contains: function(point) {
        var checkCoord = function(coord) {
            // What's up with THIS?
            return this['from_' + coord] <= point[coord] && point[coord] <= this['to_' + coord];
        };
        return checkCoord('x') && checkCoord('y');
    }
};
    
document.writeln(rectangle.contains({x:5,y:5}));
document.writeln(rectangle.contains({x:11,y:5}));
