/**
 * Masks the first and last digits of a credit card number
 * if its length is at least `minLength`.
 * @param cardNumber Credit card number
 * @param minLength Minimum length to obfuscate the card number
 * @param firstVisible Number of visible digits at the start
 * @param lastVisible Number of visible digits at the end
 * @returns Masked credit card number
 */
export function maskify(
  cardNumber: string,
  minLength: number,
  firstVisible: number,
  lastVisible: number,
): string {
  const toBeMasked = (index: number) =>
    cardNumber.length >= minLength &&
    index > firstVisible - 1 &&
    index < cardNumber.length - lastVisible;

  return cardNumber
    .split("")
    .map((digit: string, i: number) => (toBeMasked(i) ? "x" : digit))
    .join("");
}
