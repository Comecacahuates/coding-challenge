/**
 * Evaluates a reverse polish notation expression.
 *
 * Supported operators:
 *
 * - `+` - sum
 * - `-` - difference
 * - `*` - miltiplication
 * - `/` - division
 * - `^` - power
 * - `sqrt` - square root
 *
 * Throws {@link SyntaxError} if the expression is not valid or empty.
 *
 * Examples:
 *
 * ```typescript
 * const result = evaluateRpn("2 5 + 10 *"); // Result is 70
 * ```
 *
 * ```typescript
 * const result = evaluateRpn("4 2 * 4 4 + + sqrt 2 /"); // Result is 2
 * ```
 *
 * @param rpn Expression to evaluate
 * @returns Result of the evaluation
 */
export function evaluateRpn(rpn: string): number {
  if (/^\s*$/.test(rpn)) {
    throw new SyntaxError("RPN expression is empty");
  }

  const operators: Record<string, Function> = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
    "^": (a: number, b: number) => Math.pow(a, b),
    sqrt: (a: number) => Math.sqrt(a),
  };

  const symbols = rpn.split(/\s+/);
  const toOperand = (symbol: string) => parseFloat(symbol) || null;
  const toOperator = (symbol: string) => operators[symbol] || null;

  // Pops a number of operands from a stack
  const popOperands = (stack: number[], numOperands: number) => {
    if (stack.length < numOperands) {
      throw new SyntaxError(
        `'${rpn}' is not a valid RPN expression: Not enough operands`,
      );
    }

    const operands = [];
    for (let i = 0; i < numOperands; i++) {
      operands.unshift(stack.pop());
    }
    return operands;
  };

  const stack = symbols.reduce((stack: number[], symbol: string) => {
    const operand = toOperand(symbol);
    if (operand) {
      stack.push(operand);
      return stack;
    }

    const operator = toOperator(symbol);
    if (operator) {
      try {
        const operands = popOperands(stack, operator.length);
        const operationResult = operator(...operands);
        stack.push(operationResult);
      } catch (error) {
        throw new SyntaxError(
          `'${rpn}' is not a valid RPN expression: Not enough operands for '${symbol}' operator`,
        );
      }
    } else {
      throw new SyntaxError(
        `${rpn}' is not a valid RPN expression: '${symbol}' is neither an operand nor an operator`,
      );
    }
    return stack;
  }, []);

  // If the expression is correct, there must be a single value in the stack
  if (stack.length !== 1) {
    throw new SyntaxError(
      `'${rpn}' is not a valid RPN expression: Not enough operators`,
    );
  }

  return stack[0];
}
