# Coding challenge

This project includes a file the file `src/utils.ts`, which contains the
following utility functions and the correspondig tests
in the file `src/utils.test.ts`.
The file `src/index.ts` contains some examples of the usage of these functions.

## Functions

### `maskify(cardNumber: string): string`

Receives a credit card number as a string and returns it obfuscated:
if its length is greater than or equal to 7, all digits are replaced by `x`
except the first one and the last four.
Otherwise, it returns the card number as is.

### `numberToOrdinal(n: number): string`

Receives a number and returns its corresponding ordinal as a string.

### `evaluateRpn(rpn: string): number`

Receives a reverse polish notation expression as a string and returns
the result of evaluating such expression.

## Scripts

- `npm run dev` - Run `src/index.ts` file
- `npm run test`, `npm run test:watch` - Run tests
- `npm run build` - Transpile TypeScript to JavaScript
