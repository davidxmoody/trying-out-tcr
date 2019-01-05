import {expect} from "chai"
import {booleanTest, stringifyMath} from "./index"

const booleanTestCases: Array<[number, number[], boolean]> = [
  // Base case
  [1, [1], true],
  [1, [2], false],

  // Addition
  [3, [1, 2], true],
  [3, [1, 2, 1], true],
  [3, [9, 2, 1], true],
  [3, [1, 2, 9], true],
  [3, [2, 9], false],

  // Subtraction
  [5, [4, 9], true],
  [5, [9, 4], true],
  [5, [9, 4, 1], true],
  [5, [9, 3, 1], true],
  [5, [9, 1, 1], false],
  [100, [50, 1, 25, 30, 4], true],

  // Multiplication
  [6, [2, 3], true],
  [6, [2, 99, 3], true],
  [9, [1, 2, 3], true],

  // Division
  [3, [6, 2], true],
  [3, [2, 6], true],
  [3, [642, 2, 99, 6, 6666], true],

  // Complex
  [5, [9, 2, 1], true],
  [106, [25, 4, 6666, 1111], true],
  [106, [25, 4, 6666, 1115], false],
]

describe("Countdown game boolean tests", () => {
  for (const testCase of booleanTestCases) {
    it(JSON.stringify(testCase), () => {
      expect(booleanTest(testCase[0], testCase[1])).to.eql(testCase[2])
    })
  }
})

describe("Stringify math", () => {
  it("returns a number", () => {
    expect(stringifyMath(1)).to.eql("1")
  })
})
