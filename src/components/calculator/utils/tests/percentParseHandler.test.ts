import { percentParseHandler } from "src/components/calculator/utils/percentParseHandler";

describe("percentParseHandler", () => {
  it("should parse the received value and return numbers", () => {
    const calc = {
      num: "3",
      sign: "+",
      res: 3,
    };
    const [calcNum, calcRes] = percentParseHandler({ calc });
    expect(calcNum).toBe(3);
    expect(calcRes).toBe(3);
  });
});
