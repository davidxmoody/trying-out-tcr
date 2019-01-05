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

function extract(nums: number[], i: number, j: number): [number, number, number[]] {
  if (i < 0 || j < 0 || i >= nums.length || j >= nums.length || i >= j) {
    throw new Error(`Preconditions not met, ${nums}, ${i}, ${j}`)
  }

  const clone = [...nums]
  const b = clone.splice(j, 1)[0]
  const a = clone.splice(i, 1)[0]
  return [a, b, clone]
}

function test(target: number, nums: number[]): boolean {
  if (nums.length === 0) {
    throw new Error("No nums left, should never reach this point")
  }

  if (nums.length === 1) {
    return nums[0] === target
  }

  const [a, b, rest] = extract(nums, 0, 1)

  return operators.some(op => test(target, [op(a, b), ...rest]))
}

export default test
