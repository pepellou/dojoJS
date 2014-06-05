var aPoint = {
    x: 1,
    y: 2,
    distance: function(anotherPoint) {
        var dx = anotherPoint.x - this.x;
        var dy = anotherPoint.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
};

document.writeln(aPoint.distance({x:4,y:6}));

aPoint.translate = function(dx, dy) {
    return {
        x: this.x + dx,
        y: this.y + dy
    };
};

document.writeln(aPoint.translate({x:4,y:6}));
