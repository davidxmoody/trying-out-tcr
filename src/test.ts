import {expect} from "chai"
import fun from "./index"

describe("test", () => {
  it("returns true", () => {
    expect(fun(1, [1])).to.be.true
  })
})
