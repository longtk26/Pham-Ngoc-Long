import { sumToNA, sumToNB, sumToNC } from "../main";

// Test cases sumToN A
test('[happy case]: sumToN O(1) with n > 0', () => {
    const n = 10;
    const result = sumToNA(n);
    expect(result).toBe(55);
})

test('[edge case]: sumToN O(1) with n <= 0', () => {
    const n = -1;
    const result = sumToNA(n);
    expect(result).toBe(0);
})

// Test cases sumToN B
test('[happy case]: sumToN O(n) with n > 0', () => {
    const n = 10;
    const result = sumToNB(n);
    expect(result).toBe(55);
})


test('[edge case]: sumToN O(n) with n <= 0', () => {
    const n = -1;
    const result = sumToNB(n);
    expect(result).toBe(0);
})

// Test cases sumToN C
test('[happy case]: sumToN O(n) - recursive with n > 0', () => {
    const n = 10;
    const result = sumToNC(n);
    expect(result).toBe(55);
})

test('[edge case]: sumToN O(n) - recursive with n <= 0', () => {
    const n = -1;
    const result = sumToNC(n);
    expect(result).toBe(0);
})