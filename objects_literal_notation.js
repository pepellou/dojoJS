var anObject = {
    aProperty: 'a',
    anotherProperty: 'b',
    aMethod: function() {
        return 'hi, there!';
    }
};

document.writeln(anObject.aProperty);
document.writeln(anObject.anotherProperty);
document.writeln(anObject.aMethod());

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
