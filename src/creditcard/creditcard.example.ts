import { maskify } from "./";

{
  const cardNumber = "12345";
  const maskedCardNumber = maskify(cardNumber, 7, 1, 4);
  console.log(`${cardNumber} masked is ${maskedCardNumber}`);
}

{
  const cardNumber = "12a45a78a1234567";
  const maskedCardNumber = maskify(cardNumber, 7, 1, 4);
  console.log(`${cardNumber} masked is ${maskedCardNumber}`);
}
