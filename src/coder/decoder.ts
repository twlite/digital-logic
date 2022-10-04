import { generateSignals, maxNumbersIn } from "../utils/bits";
import { toExpression } from "../utils/expression";

/**
 * Decoder
 * @param {number} n Input lines. Must be 2^n
 * @return Nested array of n bits
 * @example // 3x8 Decoder
 * const { Decoder } = require("digital-logic");
 *
 * const decoder = Decoder.decoder(3);
 * console.log(decoder);
 */
export function decoder(n: number) {
    const numOfOutputLines = maxNumbersIn(n);
    const input = generateSignals(n);
    const result = Array.from({ length: numOfOutputLines }, (_, i) => {
        return {
            output: Array.from(
                { length: numOfOutputLines },
                (_, j) => +(i === j)
            ),
            input: input[i],
            expression: toExpression(input[i])
        };
    });

    return result;
}
