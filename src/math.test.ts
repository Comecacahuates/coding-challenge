import { evaluateRpn } from "./math";

describe("Evaluate reverse polish notation", () => {
  it("Sum and difference: '5 2 + -10 -'", () => {
    expect(evaluateRpn("5 2 + -10 -")).toBe(5 + 2 - -10);
  });

  it("Multiplication and division: '3 4 * 2 /'", () => {
    expect(evaluateRpn("3 4 * 2 /")).toBe((3 * 4) / 2);
  });

  it("Power and square root:  '2 4 ^ sqrt'", () => {
    expect(evaluateRpn("2 4 ^ sqrt")).toBe(Math.sqrt(Math.pow(2, 4)));
  });

  it("All operations: '25 5 / 18 + 16 sqrt - 4 * 3 ^'", () => {
    expect(evaluateRpn("25 5 / 18 + 16 sqrt - 4 * 3 ^")).toBe(
      Math.pow((25 / 5 + 18 - Math.sqrt(16)) * 4, 3),
    );
  });

  it("Floating point numbers: '25.7 5.8 / 18.4 + 16.7 sqrt - 4.2 * 3.3 ^'", () => {
    expect(evaluateRpn("25.7 5.8 / 18.4 + 16.7 sqrt - 4.2 * 3.3 ^")).toBe(
      Math.pow((25.7 / 5.8 + 18.4 - Math.sqrt(16.7)) * 4.2, 3.3),
    );
  });

  it("Invalid symbols: '1 x + 2 d - *'", () => {
    expect(() => {
      evaluateRpn("1 x + 2 d - *");
    }).toThrow(SyntaxError);
  });

  it("Not enough operands: '5 3 + *'", () => {
    expect(() => {
      evaluateRpn("1 1 + +");
    }).toThrow(SyntaxError);
  });

  it("Not enough operators: '8 5 3 /", () => {
    expect(() => {
      evaluateRpn("8 5 3 /");
    }).toThrow(SyntaxError);
  });
});
