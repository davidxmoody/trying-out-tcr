import {expect} from "chai"
import fun from "./index"

describe("test", () => {
  it("returns true if the target is contained in the list", () => {
    expect(fun(1, [1])).to.be.true
  })

  it("returns false if the target is not contained in the list", () => {
    expect(fun(1, [2])).to.be.false
  })

  it("returns true if the numbers can be added to create the target", () => {
    expect(fun(3, [1, 2])).to.be.true
  })
})
