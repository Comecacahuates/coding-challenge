import { maskify } from "./creditcard";
import { numberToOrdinal } from "./utils";
import { evaluateRpn } from "./math";

function maskifyExample() {
  console.log("\nMaskify card number");

  try {
    const cardNumber = "1234567891234567";
    const maskedCardNumber = maskify(cardNumber, 7, 1, 4);
    console.log(`${cardNumber} masked is ${maskedCardNumber}`);
  } catch (error) {
    console.error(error);
  }

  try {
    const cardNumber = "12a45a78a123a567";
    const maskedCardNumber = maskify(cardNumber, 7, 1, 4);
    console.log(`${cardNumber} masked is ${maskedCardNumber}`);
  } catch (error) {
    console.error(error);
  }
}

function numberToOrdinalExample() {
  console.log("\nNumber to ordinal");

  try {
    const n = 3;
    const ordinal = numberToOrdinal(n);
    console.log(`${n} corresponds to ${ordinal}`);
  } catch (error) {
    console.error(error);
  }

  try {
    const n = -3;
    const ordinal = numberToOrdinal(n);
    console.log(`${n} corresponds to ${ordinal}`);
  } catch (error) {
    console.error(error);
  }
}

function evaluateRpnExample() {
  console.log("\nEvaluate RPN expression");

  try {
    const rpn = "6 3 / 5 -3 - 25 sqrt * +";
    const result = evaluateRpn(rpn);
    console.log(`'${rpn}' evaluates to ${result}`);
  } catch (error) {
    console.error(error);
  }

  try {
    const rpn = "2 3 + 5 3 -+ 25 sqrt *";
    const result = evaluateRpn(rpn);
    console.log(`'${rpn}' evaluates to ${result}`);
  } catch (error) {
    console.error(error);
  }
}

function main() {
  maskifyExample();

  numberToOrdinalExample();

  evaluateRpnExample();
}

main();
