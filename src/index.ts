const operators: Array<(a: number, b: number) => number> = [
  (a, _) => a,
  (_, b) => b,
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => b - a,
  (a, b) => a * b,
  (a, b) => a / b,
  (a, b) => b / a,
]

function test(target: number, nums: number[]): boolean {
  if (nums.length === 0) {
    throw new Error("No nums left, should never reach this point")
  }

  if (nums.length === 1) {
    return nums[0] === target
  }

  const i = 0
  const j = 1
  const numsClone = [...nums]
  const b = numsClone.splice(j, 1)[0]
  const a = numsClone.splice(i, 1)[0]

  return operators.some(op => test(target, [op(a, b), ...numsClone]))
}

export default test
