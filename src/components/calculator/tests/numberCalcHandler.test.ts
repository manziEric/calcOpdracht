import { numberCalcHandler } from "src/components/calculator/utils/numberCalcHandler";

describe("numberCalcHandler", () => {
  it("should add up the numbers", () => {
    const [calcResult] = numberCalcHandler({ num: "2", sign: "+", res: 0 });
    expect(calcResult).toBe(2);
  });
});
