/**
 * Returns the number of required bits to fit the given number
 * @param n The number
 * @param base The base
 */
export function bitsFor(n: number, base: number): number {
    return Math.round(Math.log(n) / Math.log(base));
}

/**
 * Returns the max possible representation of the numbers in given bit
 * @param bits The number of bits to use
 */
export function maxNumbersIn(bits: number): number {
    return 2 ** bits;
}

/**
 * Checks if the given number is a power of 2
 * @param n The number to check
 */
export function isPowerOfTwo(n: number): boolean {
    return n !== 0 && !(n & (n - 1));
}

/**
 * Generates a list of on-off signals for the given bit
 * @param bits The number of bits to use
 */
export function generateSignals(bits = 2): number[][] {
    const signals: number[][] = Array.from(
        { length: maxNumbersIn(bits) },
        (_, i) => {
            const arr = i
                .toString(2)
                .split("")
                .map((m) => parseInt(m));
            return arr;
        }
    ).map((m) => {
        while (m.length !== bits) {
            if (m.length > bits) break;
            m.unshift(0);
        }

        return m;
    });

    return signals;
}
