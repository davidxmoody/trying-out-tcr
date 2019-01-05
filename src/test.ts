import {expect} from "chai"
import fun from "./index"

const testCases: Array<[number, number[], boolean]> = [
  [1, [1], true],
  [1, [2], false],
  [3, [1, 2], true],
  [3, [1, 2, 1], true],
  [3, [9, 2, 1], true],
  [3, [1, 2, 9], true],
  [3, [2, 9], false],
  [5, [4, 9], true],
  [5, [9, 4], true],
  [5, [9, 4, 1], true],
  [5, [9, 3, 1], true],
  [5, [9, 2, 1], false],
  [100, [50, 1, 25, 30, 4], true],
]

describe("Countdown game", () => {
  for (const testCase of testCases) {
    it(JSON.stringify(testCase), () => {
      expect(fun(testCase[0], testCase[1])).to.eql(testCase[2])
    })
  }
})
