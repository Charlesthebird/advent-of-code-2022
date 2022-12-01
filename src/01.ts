import * as fs from "fs";
const inputStr = fs.readFileSync("./inputs/01.txt", "utf-8");

// https://adventofcode.com/2022/day/1
const result = inputStr
  .split("\n")
  .reduce(
    (p, c) =>
      c.trim() === ""
        ? [...p, 0]
        : [...p.slice(0, -1), p.at(-1) + Number.parseInt(c)],
    [0]
  )
  .reduce((p, c) => (c > p ? c : p), 0);

console.log(result);
