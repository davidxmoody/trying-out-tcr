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

  const [a, b, ...rest] = nums

  return operators.some(op => test(target, [op(a, b), ...rest]))
}

export default test
