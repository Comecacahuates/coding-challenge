import { evaluateRpn, maskify, numberToOrdinal } from "./utils";
import { InvalidArgumentError } from "./errors";

describe("Mask credit card number", () => {
  it("Mask '123456'", () => {
    expect(maskify("123456")).toBe("123456");
  });

  it("Mask '5234123412349876'", () => {
    expect(maskify("5234123412349876")).toBe("5xxxxxxxxxxx9876");
  });

  it("Mask 'aaaa'", () => {
    expect(() => {
      maskify("aaaa");
    }).toThrow(InvalidArgumentError);
  });

  it("Mask '52341234123a9876'", () => {
    expect(() => {
      maskify("52341234123a9876");
    }).toThrow(InvalidArgumentError);
  });
});

describe("Ordinal numbers", () => {
  it("0 to ordinal", () => {
    expect(numberToOrdinal(0)).toBe("0");
  });

  it("1 to ordinal", () => {
    expect(numberToOrdinal(1)).toBe("1st");
  });

  it("2 to ordinal", () => {
    expect(numberToOrdinal(2)).toBe("2nd");
  });

  it("3 to ordinal", () => {
    expect(numberToOrdinal(3)).toBe("3rd");
  });

  it("4 to ordinal", () => {
    expect(numberToOrdinal(4)).toBe("4th");
  });

  it("10 to ordinal", () => {
    expect(numberToOrdinal(10)).toBe("10th");
  });

  it("11 to ordinal", () => {
    expect(numberToOrdinal(11)).toBe("11th");
  });

  it("12 to ordinal", () => {
    expect(numberToOrdinal(12)).toBe("12th");
  });

  it("13 to ordinal", () => {
    expect(numberToOrdinal(13)).toBe("13th");
  });

  it("20 to ordinal", () => {
    expect(numberToOrdinal(20)).toBe("20th");
  });

  it("21 to ordinal", () => {
    expect(numberToOrdinal(21)).toBe("21st");
  });

  it("22 to ordinal", () => {
    expect(numberToOrdinal(22)).toBe("22nd");
  });

  it("23 to ordinal", () => {
    expect(numberToOrdinal(23)).toBe("23rd");
  });

  it("100 to ordinal", () => {
    expect(numberToOrdinal(100)).toBe("100th");
  });

  it("101 to ordinal", () => {
    expect(numberToOrdinal(101)).toBe("101st");
  });

  it("102 to ordinal", () => {
    expect(numberToOrdinal(102)).toBe("102nd");
  });

  it("103 to ordinal", () => {
    expect(numberToOrdinal(103)).toBe("103rd");
  });

  it("-10 to ordinal", () => {
    expect(() => {
      numberToOrdinal(-10);
    }).toThrow(InvalidArgumentError);
  });
});

describe("Evaluate reverse polish notation", () => {
  it("Evaluate 3", () => {
    expect(evaluateRpn("3")).toBe(3);
  });

  it("Evaluate 3          -4           +", () => {
    expect(evaluateRpn("3          -4           +")).toBe(3 + -4);
  });

  it("Evaluate 5 4 -", () => {
    expect(evaluateRpn("5 4 -")).toBe(5 - 4);
  });

  it("Evaluate 3 2 *", () => {
    expect(evaluateRpn("3 2 *")).toBe(3 * 2);
  });

  it("Evaluate 10 5 /", () => {
    expect(evaluateRpn("10 5 /")).toBe(10 / 5);
  });

  it("Evaluate 2 3 ^", () => {
    expect(evaluateRpn("2 3 ^")).toBe(Math.pow(2, 3));
  });

  it("Evaluate 16 sqrt", () => {
    expect(evaluateRpn("16 sqrt")).toBe(Math.sqrt(16));
  });

  it("Evaluate 9 5 + 2 -", () => {
    expect(evaluateRpn("9 5 + 2 -")).toBe(9 + 5 - 2);
  });

  it("Evaluate 4 4 * sqrt", () => {
    expect(evaluateRpn("4 4 * sqrt")).toBe(Math.sqrt(4 * 4));
  });

  it("Evaluate 100 50 - 25 63 * +", () => {
    expect(evaluateRpn("100 50 - 25 63 * +")).toBe(100 - 50 + 25 * 63);
  });

  it("Evaluate 1 a + 5 2 - /", () => {
    expect(() => {
      evaluateRpn("1 a +");
    }).toThrow(SyntaxError);
  });

  it("Evaluate a b + c d - *", () => {
    expect(() => {
      evaluateRpn("a b + c d - *");
    }).toThrow(SyntaxError);
  });

  it("Evaluate 1 1 + +", () => {
    expect(() => {
      evaluateRpn("1 1 + +");
    }).toThrow(SyntaxError);
  });
});
