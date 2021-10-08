import { maskify } from "./";

describe("Mask credit card number: '123456'", () => {
  it("Card number of length 6 '123456'", () => {
    expect(maskify("123456", 7, 1, 4)).toBe("123456");
  });

  it("Card number of length 16: '5234123412349876'", () => {
    expect(maskify("5234123412349876", 7, 1, 4)).toBe("5xxxxxxxxxxx9876");
  });
});
