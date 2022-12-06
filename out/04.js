"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// https://adventofcode.com/2022/day/4
//
// Part 1
//
var lines = (function (s) { return s.split("\n"); })(fs.readFileSync("./inputs/04.txt", "utf-8"));
var result = 0;
//
// Checks if r1 fully contains r2.
function rangeFullyContains(r1, r2) {
    return r2[1] <= r1[1] && r2[0] >= r1[0];
}
for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
    var line = lines_1[_i];
    var ranges = line.split(",");
    var range1 = ranges[0].split("-").map(function (s) { return Number.parseInt(s); });
    var range2 = ranges[1].split("-").map(function (s) { return Number.parseInt(s); });
    // Check if range1 contains range2 or range2 contains range1
    if (rangeFullyContains(range1, range2) || rangeFullyContains(range2, range1))
        result++;
}
console.log(result);
//
// Part 2
//
result = 0;
//
// Checks if r1 contains any part of r2.
function rangeContainsAtAll(r1, r2) {
    return ((r2[1] <= r1[1] && r2[1] >= r1[0]) || (r2[0] <= r1[1] && r2[0] >= r1[0]));
}
for (var _a = 0, lines_2 = lines; _a < lines_2.length; _a++) {
    var line = lines_2[_a];
    var ranges = line.split(",");
    var range1 = ranges[0].split("-").map(function (s) { return Number.parseInt(s); });
    var range2 = ranges[1].split("-").map(function (s) { return Number.parseInt(s); });
    // Check if range1 contains range2 or range2 contains range1
    if (rangeContainsAtAll(range1, range2) || rangeContainsAtAll(range2, range1))
        result++;
}
console.log(result);
//# sourceMappingURL=04.js.map