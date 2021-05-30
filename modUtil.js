//to make some modular, need to wrap it with module metho and export the class
var Util;
(function (Util) {
    var Useful = /** @class */ (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        ;
        return Useful;
    }());
    Util.Useful = Useful;
    ;
})(Util || (Util = {}));
/// <reference path = "modules.ts" />
var use = new Util.Useful();
console.log(timesTwo(9));
