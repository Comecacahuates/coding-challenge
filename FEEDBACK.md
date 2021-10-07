# Reference

- ✔️: good practice. Great job!
- 😕: result is good, but there is a better way
- ❌: bad practice
- ❓:Throughout this document questions will be asked. These are intended as discussion topics, not passive-aggressive comments.

# General notes

- ❌ Sending source code in a zip file is a very bad practice. You can't update the code (you even had to resend the zip), I have no way of commenting on a common source.
- ✔️ Unit testing was implemented
- ❌ ... yet the `index.ts` file contains even more examples. Remember, `index.ts` is the entry to your module.
- ✔️ Prettier, jest and husky available and configured.
- ❌ Each function belongs to entirely different domains, yet they are bundled in a single file named `utils.js`. Keep your code organized in a logical way.
- ✔️ Great use of english. Spotless grammar and spelling.

# index.ts

- ❌ variables defined at the top of each function and reused through out. Keep variables as close to their use as possible.
- ❌ Avoid using `let`, always prefer `const` as it makes debugging easier and code more explicit
- ❌ error handling is incomplete, unhandled errors are silently ignored.
- ✔️ Providing examples is a good practice.
- ❓ If this file is meant to show proper usage of the library, why not name it `examples.ts`?

# utils.ts

## Comments

- ✔️ functions are properly annotated
- ❌ trivial comments found throughout, e.g:
  - `// Patterns for ordinal numbers`
  - `// Valid operators`
  - `// If symbol is an operator`
- 😕 regex expressions explained, this is great. Prefer to use variables for this.

Although commenting source code is often regarded as a good practice, there IS such a thing as too many comments. A comment becomes part of the source code and as such needs to be maintained. For this reason it is better to build auto documented code whenever possible, that is, allow the code to be readable by using meaningful names and break down the process into logical steps.

A very good practice to follow is: Do not comment **what** the code does, but **why** it is doing it.

## maskify

- 😕 validating the card digits might sound like a good idea, but odds are that some other, specific, process should and will handle this beforehand. Is there a good reason to do it here?
- ❌ magic numbers everywhere. `0`, `7`, `4` and `"x"` are deep into the code, this makes maintaining the source a nightmare. What happens when the specification changes? You should parameterize every value in your source code, either as a constant value or, better yet, as a parameter of the function.
- ✔️ beautiful clean use of string and array functions.
- ✔️ pure function
- ✔️ meaningful names
- ❓ By adding a single function, how can we make this more clear?

## numberToOrdinal

- 😕 using `n` as the central variable of the function. Single letter variables are acceptable as iterators or counters in small blocks, but it's more clear if the variable has a more meaningful name.
- ✔️ clever use of regular expressions
- 😕 why does passing a negative number results in an error, but passing a floating number is allowed? Is truncating the number a good solution?
- ❌ `parseInt(n.toString())` is extremely slow compared to `Math.trunc()` (97.87% slower). Using a string operation on a math expression should rise a red flag. [keep this in your bookmarks](https://jsbench.me/)
- 😕 `suffix` is used in several scopes throughout this function.
- ❓ Can `reduce` be replaced with `find`?
- ❓ How would you implement this functionality for different languages? Should this function be extended?

## evaluateRpn

- ✔️ So extendable that you already implemented extra operators
- ✔️ `split(/\s+/)` is a robust implementation
- ❓ An empty string is an invalid input?
- ✔️ `fn.length`... ingenious
- ❓ For the given example `"2 9 5 + -" => 12` the provided implementation breaks. Were the examples not tested?
- 😕 `'${rpn}' is not a valid RPN expression` provides very little information of what the problem might be
- ✔️ You are handling decimal values! (although not testing them)

# utils.test.ts

- ✔️ Exhaustive testing
- ❌ Test names are meaningless, try to give more abstract names to your tests. For example:
  - `Evaluate 5 4 -` can be rephrased as `Should handle subtraction`.
  - `Evaluate a b + c d - *` doesn't explain why it should throw an error.
- ❌ Input validation, error handling and result testing are all mixed together, it's easier to maintain well organized and logically segmented test suites
- ❌❌❌ Not using a standard language feature to accommodate a 3rd party library is an extremely bad practice. What's more, the odds of a popular library not being able to handle the Error class are very slim.
