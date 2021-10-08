/**
 * Masks the first and last digits of a credit card number
 * if its length is at least `minLength`.
 *
 * **Examples:**
 *
 * ```typescript
 * const maskedCardNumber = maskify("12345") // Result is "12345"
 * ```
 *
 * ```typescript
 * const maskedCardNumber = maskify("1234567812345678") // Result is "1***********5678"
 * ```
 *
 * @param cardNumber Credit card number
 * @param minLength Minimum length to obfuscate the card number
 * @param firstVisible Number of visible digits at the start
 * @param lastVisible Number of visible digits at the end
 * @returns Masked credit card number
 */
export function maskify(
  cardNumber: string,
  minLength: number = 7,
  firstVisible: number = 1,
  lastVisible: number = 4,
): string {
  const toBeMasked = (index: number) =>
    cardNumber.length >= minLength &&
    index > firstVisible - 1 &&
    index < cardNumber.length - lastVisible;

  const maskDigit = (digit: string, i: number) => (toBeMasked(i) ? "x" : digit);

  return cardNumber.split("").map(maskDigit).join("");
}
