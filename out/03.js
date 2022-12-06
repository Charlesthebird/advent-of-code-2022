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
// https://adventofcode.com/2022/day/3
//
// Part 1
//
console.log((function (s) {
    return s.split("\n").reduce(function (p, c) {
        return p +
            (function (c1, c2) {
                var c1Items = c1.split("");
                var c2Items = c2.split("");
                var sharedItems = Array.from(new (Set.bind.apply(Set, __spreadArray(__spreadArray([void 0], c1Items.filter(function (it) { return c2Items.includes(it); }), false), c2Items.filter(function (it) { return c1Items.includes(it); }), false)))().values());
                var sharedItemCodes = sharedItems.map(function (c) { return c.charCodeAt(0); });
                var res = sharedItemCodes.reduce(function (p, c) { return p + (c >= 97 ? c - 96 : c - 38); }, 0);
                return res;
            })(c.substring(0, c.length / 2), c.substring(c.length / 2, c.length));
    }, 0);
})(fs.readFileSync("./inputs/03.txt", "utf-8")));
// Part 2
//
var lines = (function (s) { return s.split("\n"); })(fs.readFileSync("./inputs/03.txt", "utf-8"));
var result = 0;
var groups = [];
for (var i = 0; i < lines.length; i++) {
    var groupIdx = Math.floor(i / 3);
    if (groupIdx >= groups.length)
        groups.push([]);
    groups[groupIdx].push(lines[i]);
}
for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
    var group = groups_1[_i];
    var groupId = void 0;
    var firstRucksack = group[0];
    for (var _a = 0, firstRucksack_1 = firstRucksack; _a < firstRucksack_1.length; _a++) {
        var candidate = firstRucksack_1[_a];
        var isValidCandidate = true;
        for (var i = 1; i < group.length; i++) {
            if (group[i].indexOf(candidate) == -1) {
                isValidCandidate = false;
                break;
            }
        }
        if (isValidCandidate) {
            groupId = candidate;
            break;
        }
    }
    var c = groupId.charCodeAt(0);
    result += c >= 97 ? c - 96 : c - 38;
}
console.log(result);
//# sourceMappingURL=03.js.map