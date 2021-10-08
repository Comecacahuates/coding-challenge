import { evaluateRpn } from "./";

// Ok
try {
  const rpn = "6.3e2 3 / 5 -3 - 25 sqrt * +";
  const result = evaluateRpn(rpn);
  console.log(`'${rpn}' evaluates to ${result}`);
} catch (error) {
  console.error(error);
}

// Error
try {
  const rpn = "a 3 / 5 -3 - 25 sqrt * +";
  const result = evaluateRpn(rpn);
  console.log(`'${rpn}' evaluates to ${result}`);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
}
