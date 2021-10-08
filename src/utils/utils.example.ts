import { InvalidArgumentError } from "../errors";
import { numberToOrdinal } from "./";

// Ok
try {
  const n = 3;
  const ordinal = numberToOrdinal(n);
  console.log(`${n} corresponds to ${ordinal}`);
} catch (error) {
  if (error instanceof InvalidArgumentError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
}

// Error
try {
  const n = -3;
  const ordinal = numberToOrdinal(n);
  console.log(`${n} corresponds to ${ordinal}`);
} catch (error) {
  if (error instanceof InvalidArgumentError) {
    console.error(error.message);
  } else {
    console.error(error);
  }
}
