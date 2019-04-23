"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var like = new like_component_1.Like(0, false);
like.toggle();
like.add();
console.log(like.total + ' ' + like.state);
