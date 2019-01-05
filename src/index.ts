export default (target: number, nums: number[]) => {
  if (nums.includes(target)) {
    return true
  }

  if (sum(nums) === target) {
    return true
  }

  return false
}

function sum(nums: number[]): number {
  return nums.reduce((xs, x) => xs + x, 0)
}
