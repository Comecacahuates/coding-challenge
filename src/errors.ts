/**
 * Error class.
 *
 * Used because Jest `toThrow` matcher fails with classes
 * derived from the built-in `Error` class.
 */
export class Error {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "Error";
  }
}

/**
 * Invalid argument error class.
 */
export class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidArgumentError";
  }
}
