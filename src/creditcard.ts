import { InvalidArgumentError } from "./errors";

/**
 * Masks the first and last four digits of a credit card number
 * if its length is 7 or greater.
 * @param cardNumber Credit card number
 * @returns Masked credit card number
 */
export function maskify(cardNumber: string) {
  const needsMasking = (index: number) =>
    cardNumber.length >= 7 && index > 0 && index < cardNumber.length - 4;

  return cardNumber
    .split("")
    .map((digit: string, i: number) => (needsMasking(i) ? "x" : digit))
    .join("");
}
