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
      throw new SyntaxError(`'${rpn}' is not a valid RPN expression`);
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
      throw new SyntaxError(`'${rpn}' is not a valid RPN expression`);
    }
    return stack;
  }, []);

  // If the expression is correct, there must be a single value in the stack
  if (stack.length !== 1) {
    throw new SyntaxError(`'${rpn}' is not a valid RPN expression`);
  }

  return stack[0];
}
