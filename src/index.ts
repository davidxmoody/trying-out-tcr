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

  return (
    test(target, [operators[0](a, b), ...rest]) ||
    test(target, [operators[1](a, b), ...rest]) ||
    test(target, [operators[2](a, b), ...rest]) ||
    test(target, [operators[3](a, b), ...rest]) ||
    test(target, [operators[4](a, b), ...rest]) ||
    test(target, [operators[5](a, b), ...rest]) ||
    test(target, [operators[6](a, b), ...rest]) ||
    test(target, [operators[7](a, b), ...rest])
  )
}

export default test
