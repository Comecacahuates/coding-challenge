# Coding challenge

## Modules

### `creditcard` module

- `maskify(cardNumber: string, minLength: number = 7, firstVisible: number = 1, lastVisible: number = 4): string`

  Receives a credit card number as a string and returns it obfuscated:
  if its length is greater than or equal `minLength`,
  all digits are replaced by `x` except the first (`firstVisible`)
  and the last (`lastVisible`). Otherwise, it returns the card number as is.

  **Examples:**

  ```typescript
  const maskedCardNumber = maskify("12345") // Result is "12345"
  ```
 
  ```typescript
  const maskedCardNumber = maskify("1234567812345678") // Result is "1***********5678"
  ```

### `utils` module

- `numberToOrdinal(n: number): string`

  Converts a cardinal number to its correponding ordinal in english.
  
  Throws `InvalidArgumentError` if `cardinal` is negative of not integer.
  
  **Example:**
  
  ```typescript
  const ordinal = numberToOrdinal(10); // Result is "10th"
  ```

### `math` module

- `evaluateRpn(rpn: string): number`

  Evaluates a reverse polish notation expression.
  
  Throws `SyntaxError` if the expression is not valid or empty.
  
  Supported operators:
  
  - `+` - sum
  - `-` - difference
  - `*` - miltiplication
  - `/` - division
  - `^` - power
  - `sqrt` - square root
  
  **Example**
  
  ```typescript
  const result = evaluateRpn("4 2 * 4 4 + + sqrt 2 /"); // Result is 2
  ```

## Scripts

- `npm run test`, `npm run test:watch` - Run tests
- `npm run build` - Transpile TypeScript to JavaScript
