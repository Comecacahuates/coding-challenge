import { InvalidArgumentError } from "./errors";

/**
 * Convert a number to its correponding ordinal in english.
 * @param n Number to convert
 */
export function numberToOrdinal(n: number) {
  if (n < 0) {
    throw new InvalidArgumentError(
      "Argument has to be greater than or equal to 0",
    );
  }

  // Patterns for ordinal numbers
  const ordinals = [
    {
      pattern: /^0$/, // 0
      suffix: "",
    },
    {
      pattern: /^(\d*[02-9])?1$/, // 1, 21, 31, ..., 101, ...
      suffix: "st",
    },
    {
      pattern: /^(\d*[02-9])?2$/, // 2, 22, 32, ..., 102, ...
      suffix: "nd",
    },
    {
      pattern: /^(\d*[02-9])?3$/, // 3, 23, 33, ..., 103, ...
      suffix: "rd",
    },
    {
      pattern: /\d+/, // Rest of the numbers
      suffix: "th",
    },
  ];

  // Keep only the integer part
  n = parseInt(n.toString());

  // Test number against each pattern
  const suffix = ordinals.reduce((suffix: string | null, ordinal) => {
    // If number already matched a pattern, return the same suffix
    if (suffix !== null) {
      return suffix;
    }
    // If number matches the pattern, return the correspondig suffix
    if (ordinal.pattern.test(n.toString())) {
      return ordinal.suffix;
    }
    return null;
  }, null);

  return `${n}${suffix}`;
}
