function aFunction() {
    return 'a';
}

function bFunction() {
    return 'b';
}

function xFunction(x) {
    return x;
}

function fFunction(f) {
    return f();
}

document.writeln(aFunction());
document.writeln(bFunction());
document.writeln(xFunction('hi!'));
document.writeln(fFunction(bFunction));
document.writeln(fFunction(function() { return 'ho!'; }));
document.writeln(fFunction(function() { }));
