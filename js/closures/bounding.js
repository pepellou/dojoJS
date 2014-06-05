var myNodes = [{}, {}, {}];

var addHandlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function () {
            document.writeln('clicked ' + i);
        };
    }
};

addHandlers(myNodes);

myNodes[0].onclick();
myNodes[1].onclick();
myNodes[2].onclick();

document.writeln('================');

addHandlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function(i) {
            return function () {
                document.writeln('clicked ' + i);
            }
        }(i);
    }
};

addHandlers(myNodes);

myNodes[0].onclick();
myNodes[1].onclick();
myNodes[2].onclick();
