import {countDown} from "./index.js"
import {getPercents} from "./index.js"

describe('timer', () => {
  it("correct value, incorrect value", ()=>{
    expect(countDown(4)).toBe("4 3 2 1 ")
    expect(countDown(-1)).toBe("")
    expect(countDown(0)).toBe("")
    expect(countDown("str")).not.toBeNaN()

  }) 
});

describe('percent', () => {
  it("correct value, incorrect value", ()=>{
    expect(getPercents(30,200)).toBe(60)
    expect(getPercents(10,-1)).toBe(-0.1)
    expect(getPercents(0,0)).toBe(0)
    expect(getPercents(100,-10)).toBe(-10)
    expect(getPercents("str",0)).toBeNaN()
  }) 
});