import { InvalidArgumentError } from "./errors";

/**
 * Masks the first and last four digits of a credit card number
 * if its length is 7 or greater.
 * @param cardNumber Credit card number
 * @returns Masked credit card number
 */
export function maskify(cardNumber: string) {
  // If not every character is digit
  if (!/^\d+$/.test(cardNumber)) {
    throw new InvalidArgumentError(
      "Every character in credit card number must be digit",
    );
  }

  if (cardNumber.length < 7) {
    return cardNumber;
  }

  const needsMasking = (index: number) =>
    index > 0 && index < cardNumber.length - 4;

  return cardNumber
    .split("")
    .map((digit: string, i: number) => (needsMasking(i) ? "x" : digit))
    .join("");
}

/**
 * Convert a number to its correponding ordinal in english.
 * @param n Number to convert
 */
export function numberToOrdinal(n: number) {
  throw new Error("Not implemented");
}

/**
 * Evaluates a reverse polish notation expression.
 * @param rpn Expression to evaluate
 * @returns Result of the evaluation
 */
export function evaluateRpn(rpn: string) {
  throw new Error("Not implemented");
}
