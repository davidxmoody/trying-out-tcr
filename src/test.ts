import {expect} from "chai"
import fun from "./index"

describe("test", () => {
  it("passes", () => {
    expect(fun()).to.be.true
  })

  it("passes again", () => {
    expect(fun()).to.be.true
  })
})
