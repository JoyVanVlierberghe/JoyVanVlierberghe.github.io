"use strict";
exports.__esModule = true;
exports.Topbutton = void 0;
var Topbutton = /** @class */ (function () {
    function Topbutton() {
        this.mybutton = document.getElementById("myBtn");
    }
    // window.onscroll = public() { scrollFunction() };
    Topbutton.prototype.scrollFunction = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.mybutton.style.display = "block";
        }
        else {
            this.mybutton.style.display = "none";
        }
    };
    Topbutton.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return Topbutton;
}());
exports.Topbutton = Topbutton;
