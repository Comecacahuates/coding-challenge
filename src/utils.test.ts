import { maskify } from "./utils";
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
