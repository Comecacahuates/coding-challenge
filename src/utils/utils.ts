import { InvalidArgumentError } from "../errors";

/**
 * Convert a cardinal number to its correponding ordinal in english.
 *
 * Throws {@link InvalidArgumentError} if `cardinal` is negative of not integer.
 *
 * **Example:**
 *
 * ```typescript
 * const ordinal = numberToOrdinal(10); // Result is "10th"
 * ```
 *
 * @param cardinal Number to convert
 * @returns Ordinal number
 */
export function numberToOrdinal(cardinal: number): string {
  if (cardinal < 0) {
    throw new InvalidArgumentError(
      "Argument must be greater than or equal to 0",
    );
  }

  if (cardinal % 1 !== 0) {
    throw new InvalidArgumentError("Argument must be integer");
  }

  type ordinal = { pattern: RegExp; suffix: string };
  const ordinals: ordinal[] = [
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

  const matchingOrdinal = ordinals.find((ordinal) =>
    ordinal.pattern.test(cardinal.toString()),
  );

  return `${cardinal}${matchingOrdinal!.suffix}`;
}
