---
title: Understanding XOR (Exclusive OR)
date: 2023/05/30
---

XOR, short for Exclusive OR, is a logical operation that compares two bits and returns true (1) if the bits are different, and false (0) if the bits are the same. It is an essential operation in computer science and has various applications in programming and cryptography.

## How XOR Works

The XOR operation follows a simple rule:

- If both input bits are the same (either both 0 or both 1), the result is 0.
- If the input bits are different, the result is 1.

To illustrate this, consider the following:

Input A&emsp;&emsp;Input B&emsp;&emsp;Output  
&emsp;0&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;0&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;0  
&emsp;0&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;1&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;1  
&emsp;1&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;0&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1  
&emsp;1&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;1&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;0

## Applications of XOR

### 1. Bit Manipulation

XOR is commonly used for bit manipulation tasks, such as:

- Toggling bits: Flipping the value of a specific bit.
- Swapping values: Exchanging values between variables without using a temporary variable.
- Checking parity: Determining if the number of set bits in a binary representation is even or odd.

### 2. Cryptography

XOR is a fundamental building block in many cryptographic algorithms. It provides properties such as data encryption, error detection, and random number generation.

### 3. Data Integrity

XOR is used in error detection and correction techniques like checksums and CRC (Cyclic Redundancy Check) to verify the integrity of data during transmission or storage.

## Example: Finding the Non-Duplicate Number

One interesting application of XOR is finding the non-duplicate number in an array. Let's consider an array of integers where all numbers occur twice except for one number. By performing the XOR operation on all the numbers in the array, the duplicate numbers cancel out, leaving only the non-duplicate number as the final result.

Here's an example implementation in JavaScript:

```javascript
function findNonDuplicateNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
}

const nums = [4, 2, 1, 2, 1];
const nonDuplicate = findNonDuplicateNumber(nums);
console.log("Non-duplicate number:", nonDuplicate);
output: 4;
```

In this example, the findNonDuplicateNumber function uses XOR to iterate through the array and find the non-duplicate number. The XOR operation cancels out the duplicate numbers, leaving only the non-duplicate number as the final result.

## Conclusion

XOR is a powerful operation that plays a crucial role in computer science. Its simplicity and versatility make it useful in various domains, including programming, cryptography, and data integrity. Understanding XOR can expand your problem-solving capabilities and empower you to implement efficient algorithms and secure systems.
