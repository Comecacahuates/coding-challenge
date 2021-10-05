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

/**
 * Evaluates a reverse polish notation expression.
 * @param rpn Expression to evaluate
 * @returns Result of the evaluation
 */
export function evaluateRpn(rpn: string) {
  // Valid operators
  const operators: Record<string, Function> = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
    "^": (a: number, b: number) => Math.pow(a, b),
    sqrt: (a: number) => Math.sqrt(a),
  };

  const symbols = rpn.split(/\s+/); // List of symbols in RPN expression
  const toOperand = (symbol: string) => parseFloat(symbol) || null;
  const toOperator = (symbol: string) => operators[symbol] || null;

  // Pops operands from stack
  const popOperands = (stack: number[], numOperands: number) => {
    // If there are not enough operands
    if (stack.length < numOperands) {
      throw new SyntaxError("RPN expression is not valid");
    }
    const operands = [];
    for (let i = 0; i < numOperands; i++) {
      operands.unshift(stack.pop());
    }
    return operands;
  };

  // Process each symbol in the expression
  const stack = symbols.reduce((stack: number[], symbol: string) => {
    // If symbol is an operand
    const operand = toOperand(symbol);
    if (operand) {
      stack.push(operand);
      return stack;
    }

    // If symbol is an operator
    const operator = toOperator(symbol);
    if (operator) {
      // Pop from the stack the operands needed for the operator and evaluate it
      const operands = popOperands(stack, operator.length);
      const operationResult = operator(...operands);
      stack.push(operationResult);
      // If symbol is neither operand nor operator
    } else {
      throw new SyntaxError("RPN expression is not valid");
    }
    return stack;
  }, []);

  // If the expression is correct, there must be a single value in the stack
  if (stack.length !== 1) {
    throw new SyntaxError("RPN expression is not valid");
  }

  return stack[0];
}
