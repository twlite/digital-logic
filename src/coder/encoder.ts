import { bitsFor, generateSignals, isPowerOfTwo } from "../utils/bits";
import { toExpression } from "../utils/expression";

/**
 * Encoder
 * @param {number} n Input lines. Must be 2^n
 * @return Nested array of n bits
 * @example // 8x3 Encoder
 * const { Encoder } = require("digital-logic");
 *
 * const encoder = Encoder.encoder(8);
 * console.log(encoder);
 */
export function encoder(n: number) {
    if (!isPowerOfTwo(n))
        throw new TypeError("Number of input lines must be 2^n.");

    const numOfOutputLines = bitsFor(n, 2);
    const output = generateSignals(numOfOutputLines);
    const result = Array.from({ length: n }, (_, i) => {
        return {
            input: Array.from({ length: n }, (_, j) => +(i === j)),
            output: output[i],
            expression: toExpression(output[i])
        };
    });

    return result;
}
