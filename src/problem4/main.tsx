const sumToNA = (n: number): number => {
    // Complexity: O(1)
    if (n <= 0) {
        return 0;
    }
    return n * (n + 1) / 2;
}

const sumToNB = (n: number): number => {
    // Complexity: O(n)
    if (n <= 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}

const sumToNC = (n: number): number => {
    // Complexity: O(n) - Recursive
    if (n <= 0) {
        return 0;
    }
    return n + sumToNC(n - 1);
}

export { sumToNA, sumToNB, sumToNC };
