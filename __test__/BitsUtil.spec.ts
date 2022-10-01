import { describe, expect, test } from "vitest";
import { Adder, BitsUtil } from "../src/main";

describe("Bits Utilities", () => {
    test("Generate Signals", () => {
        const twoBitSignal = BitsUtil.generateSignals(2);
        expect(twoBitSignal).toStrictEqual([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ]);
    });

    test("Number of bits required to represent 55", () => {
        const noOfBits = BitsUtil.bitsFor(55, 2);
        expect(noOfBits).toBe(6);
    });

    test("Max possible numbers in 4 bits", () => {
        const noOfBits = BitsUtil.maxNumbersIn(4);
        expect(noOfBits).toBe(16);
    });
});
