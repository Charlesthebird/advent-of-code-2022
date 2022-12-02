import * as fs from "fs";

// https://adventofcode.com/2022/day/2
//
// Part 1
//
// 0=A=X=rock     1pt >scissors
// 1=B=Y=paper    2pt >rock
// 2=C=Z=scissors 3pt >paper
//
// Winning [2,1]
// 0-2=-2
// 1-0=1
// 2-1=1
//
// Losing [-1,2]
// 0-1=-1
// 1-2=-1
// 2-0=2
//
console.log(
  ((s: string) =>
    s
      .split("\n")
      .reduce(
        (p, c) =>
          p +
          ((me: number, them: number) =>
            me + 1 + (me === them ? 3 : [-2, 1].includes(me - them) ? 6 : 0))(
            c.charCodeAt(2) - 88,
            c.charCodeAt(0) - 65
          ),
        0
      ))(fs.readFileSync("./inputs/02.txt", "utf-8"))
);

// Part 2
//
// X=Lose
// Y=Win
// Z=Draw
//
console.log(
  ((s: string) =>
    s
      .split("\n")
      .reduce(
        (p, c) =>
          p +
          ((outcome: number, them: number) =>
            ((me: number, them: number) =>
              me + 1 + (me === them ? 3 : [-2, 1].includes(me - them) ? 6 : 0))(
              [(them + 2) % 3, them, (them + 1) % 3][outcome],
              them
            ))(c.charCodeAt(2) - 88, c.charCodeAt(0) - 65),
        0
      ))(fs.readFileSync("./inputs/02.txt", "utf-8"))
);
