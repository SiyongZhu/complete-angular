"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_total, _state) {
        this._total = _total;
        this._state = _state;
    }
    Like.prototype.toggle = function () {
        // if(this._state == true){
        //     this._state = false
        //     if(this._total > 0){
        //         this._total --
        //     }
        // }else{
        //     this._state = true
        //     this._total ++
        // }
        this._total += (this._state) ? -1 : 1;
        this._state = !this._state;
    };
    Like.prototype.add = function () {
        this._total++;
    };
    Object.defineProperty(Like.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "total", {
        get: function () {
            return this._total;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
