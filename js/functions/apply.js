function sum(a, b) {
    return a + b;
}

document.writeln(sum.apply(null, [2,5]));

function getTtl() {
    return this.ttl;
}

document.writeln(getTtl.apply({ttl:42}));

function duplicate() {
    return 2 * this;
}

document.writeln(duplicate.apply(2));
document.writeln(duplicate.apply(3.4));

function countGreater() {
    var count = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > this) {
            count++;
        }
    }
    return count;
}

document.writeln(countGreater.apply(3.4, [0, 1, 2, 3, 4, 5, 6]));
