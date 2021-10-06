import { maskify, numberToOrdinal, evaluateRpn } from "./utils";
import { InvalidArgumentError, SyntaxError } from "./errors";

function maskifyExample() {
  let cardNumber: string;
  let maskedCardNumber: string;

  console.log("\nMaskify card number");

  try {
    cardNumber = "1234567891234567";
    maskedCardNumber = maskify(cardNumber);
    console.log(`${cardNumber} masked is ${maskedCardNumber}`);
  } catch (error) {}

  try {
    cardNumber = "12a45a78a123a567";
    maskedCardNumber = maskify(cardNumber);
    console.log(`${cardNumber} masked is ${maskedCardNumber}`);
  } catch (error) {
    if (error instanceof InvalidArgumentError) {
      console.error(error.message);
    }
  }
}

function numberToOrdinalExample() {
  let n: number;
  let ordinal: string;

  console.log("\nNumber to ordinal");

  try {
    n = 3;
    ordinal = numberToOrdinal(n);
    console.log(`${n} corresponds to ${ordinal}`);
  } catch (error) {
    if (error instanceof InvalidArgumentError) {
      console.error(error.message);
    }
  }

  try {
    n = -3;
    ordinal = numberToOrdinal(n);
    console.log(`${n} corresponds to ${ordinal}`);
  } catch (error) {
    if (error instanceof InvalidArgumentError) {
      console.error(error.message);
    }
  }
}

function evaluateRpnExample() {
  let rpn: string;
  let result: number;

  console.log("\nEvaluate RPN expression");

  try {
    rpn = "6 3 / 5 -3 - 25 sqrt * +";
    result = evaluateRpn(rpn);
    console.log(`'${rpn}' evaluates to ${result}`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error(error.message);
    }
  }

  try {
    rpn = "2 3 + 5 3 -+ 25 sqrt *";
    result = evaluateRpn(rpn);
    console.log(`'${rpn}' evaluates to ${result}`);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error(error.message);
    }
  }
}

function main() {
  maskifyExample();

  numberToOrdinalExample();

  evaluateRpnExample();
}

main();
