import { bitsFor, generateSignals, isPowerOfTwo } from "../utils/bits";
import { toExpression } from "../utils/expression";

/**
 * demultiplexer
 * @param {number} For 1 * 2^n demultiplexer, input must be 2^n
 * @return {object} Object with three properties selectionInputs, outputs and expressions
 * @example // 1x8 Demultiplexer
 * const { Demultiplexer } = require("digital-logic");
 *
 * const demultiplexer = Demultiplexer.demultiplexer(8);
 * console.log(demultiplexer);
 */

export function demultiplexer(n: number) {
    if (!isPowerOfTwo(n)) throw new TypeError("For 1 * 2^n demultiplexer, input must be 2^n");

    const numOfSelectLine = bitsFor(n, 2);
    const input = generateSignals(numOfSelectLine);

    const result = Array.from({ length: n }, (_, i) => {
        return {
            selectionInputs: input[i],
            outputs: Array.from({ length: n }, (_, j) => +(i === j)),
            expression: toExpression(input[i]) + "I"
        };
    });

    return result;
}
