import { maskify, numberToOrdinal } from "./utils";
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
