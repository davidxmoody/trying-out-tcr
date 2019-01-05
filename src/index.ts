function test(target: number, nums: number[]): boolean {
  if (nums.length === 0) {
    throw new Error("No nums left, should never reach this point")
  }

  if (nums.length === 1) {
    return nums[0] === target
  }

  const [first, second, ...rest] = nums

  return (
    test(target, [first + second, ...rest]) ||
    test(target, [second, ...rest]) ||
    test(target, [first, ...rest]) ||
    test(target, [first - second, ...rest]) ||
    test(target, [second - first, ...rest]) ||
    test(target, [first * second, ...rest]) ||
    test(target, [first / second, ...rest]) ||
    test(target, [second / first, ...rest])
  )
}

export default test
