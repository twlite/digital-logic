import { bitsFor, generateSignals, isPowerOfTwo } from "../utils/bits";
import { toExpression } from "../utils/expression";
/**
 * Multiplexer
 * @param {number} n Input lines. Must be 2^n
 * @return {object} Object with two properties results and logicalExpressions
 * @example // 8x1 Multiplexer
 * const { Multiplexer } = require("digital-logic");
 *
 * const multiplexer = Multiplexer.multiplexer(8);
 * console.log(multiplexer);
 */
export function multiplexer(n: number) {
    if (!isPowerOfTwo(n))
        throw new TypeError(
            "Number of input lines must be 2^n and greater than one."
        );

    const numOfSelectLine = bitsFor(n, 2);
    const input = generateSignals(numOfSelectLine);

    let logicalExpression = "";
    const results = Array.from({ length: n }, (_, i) => {
        const output = `X${i}`;
        const exp = toExpression(input[i]) + output;
        logicalExpression += i === 0 ? `${exp} ` : `+ ${exp} `;

        return { inputs: input[i], output };
    });

    return { results, logicalExpressions: logicalExpression.trim() };
}
