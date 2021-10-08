import { numberToOrdinal } from "./";
import { InvalidArgumentError } from "../errors";

describe("Ordinal numbers", () => {
  it("0 to 0", () => {
    expect(numberToOrdinal(0)).toBe("0");
  });

  it("1 to 1st", () => {
    expect(numberToOrdinal(1)).toBe("1st");
  });

  it("2 to 2nd", () => {
    expect(numberToOrdinal(2)).toBe("2nd");
  });

  it("3 to 3rd", () => {
    expect(numberToOrdinal(3)).toBe("3rd");
  });

  it("4 to 4th", () => {
    expect(numberToOrdinal(4)).toBe("4th");
  });

  it("11 to 11th", () => {
    expect(numberToOrdinal(11)).toBe("11th");
  });

  it("12 to 12th", () => {
    expect(numberToOrdinal(12)).toBe("12th");
  });

  it("13 to 13th", () => {
    expect(numberToOrdinal(13)).toBe("13th");
  });

  it("21 to 21st", () => {
    expect(numberToOrdinal(21)).toBe("21st");
  });

  it("22 to 22nd", () => {
    expect(numberToOrdinal(22)).toBe("22nd");
  });

  it("23 to 23rd", () => {
    expect(numberToOrdinal(23)).toBe("23rd");
  });

  it("471 to 471st", () => {
    expect(numberToOrdinal(471)).toBe("471st");
  });

  it("897 to 897th", () => {
    expect(numberToOrdinal(897)).toBe("897th");
  });

  it("-10 is invalid", () => {
    expect(() => {
      numberToOrdinal(-10);
    }).toThrow(InvalidArgumentError);
  });

  it("1.5 is invalid", () => {
    expect(() => {
      numberToOrdinal(-10);
    }).toThrow(InvalidArgumentError);
  });
});
