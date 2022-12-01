"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputStr = fs.readFileSync("./inputs/01.txt", "utf-8");
var result = inputStr
    .split("\n")
    .reduce(function (p, c) {
    return c.trim() === ""
        ? __spreadArray(__spreadArray([], p, true), [0], false) : __spreadArray(__spreadArray([], p.slice(0, -1), true), [p.at(-1) + Number.parseInt(c)], false);
}, [0])
    .reduce(function (p, c) { return (c > p ? c : p); }, 0);
console.log(result);
//# sourceMappingURL=01.js.map