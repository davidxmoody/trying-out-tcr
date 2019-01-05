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

function perms(nums: number[]): Array<[number, number, number[]]> {
  const p: Array<[number, number, number[]]> = []

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      p.push(extract(nums, i, j))
    }
  }

  return p
}

export function booleanTest(target: number, nums: number[]): boolean {
  if (nums.length === 0) {
    throw new Error("No nums left, should never reach this point")
  }

  if (nums.length === 1) {
    return nums[0] === target
  }

  for (const [a, b, rest] of perms(nums)) {
    if (operators.some(op => booleanTest(target, [op(a, b), ...rest]))) {
      return true
    }
  }

  return false
}

export type Operator = "+" | "-" | "*" | "/"

export interface MathInstruction {
  a: number | MathInstruction
  b: number | MathInstruction
  operator: Operator
}

export function stringifyMath(m: number | MathInstruction, depth: number = 0): string {
  if (typeof m === "number") {
    return `${m}`
  }

  const withoutBrackets = `${stringifyMath(m.a, depth + 1)} ${m.operator} ${stringifyMath(m.b, depth + 1)}`

  if (depth === 0 || m.operator === "+" || m.operator === "-") {
    return withoutBrackets
  }

  return `(${withoutBrackets})`
}
