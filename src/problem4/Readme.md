# SumToN Functions

This module provides three implementations of a function to calculate the sum of all integers from 1 to `n`.

## Functions

### `sumToNA(n: number): number`
- **Description**: Uses the formula for the sum of the first `n` natural numbers
    ```bash
    n * (n + 1) / 2
    ```
- **Complexity**: \( O(1) \) - Constant time complexity.
- **Example**: 
  ```typescript
  sumToNA(5); // Returns 15

### `sumToNB(n: number): number`
- **Description**: Iteratively calculates the sum by looping through all integers from 1 to `n` and summing them.
- **Complexity**: \( O(n) \) - Linear time complexity.
- **Example**: 
  ```typescript
  sumToNB(5); // Returns 15
  ```

### `sumToNC(n: number): number`
- **Description**: Uses recursion to calculate the sum of all integers from 1 to `n`. Each function call adds the current number to the result of the function called with \( n - 1 \). The recursion continues until `n` reaches 0.
- **Complexity**: \( O(n) \) - Linear time complexity due to \( n \) recursive calls.
- **Example**: 
  ```typescript
  sumToNC(5); // Returns 15

## Running Tests
1. Install dependencies:
    ```bash
    npm install
    ```
2. Run test cases:
    ```bash
    npm test
    ```