import { describe, expect, test } from "vitest";
import { Adder, BitsUtil } from "../src/main";

describe("Adder", () => {
    test("Half Adder", () => {
        const result = BitsUtil.generateSignals(2).map((m) => {
            const add = Adder.halfAdder(m[0], m[1]);
            return [add.carry, add.sum];
        });
        expect(result).toStrictEqual([
            [0, 0],
            [0, 1],
            [0, 1],
            [1, 0]
        ]);
    });

    test("Full Adder", () => {
        const result = BitsUtil.generateSignals(3).map((m) => {
            const add = Adder.fullAdder(m[0], m[1], m[2]);
            return [add.carry, add.sum];
        });
        expect(result).toStrictEqual([
            [0, 0],
            [0, 1],
            [0, 1],
            [1, 0],
            [0, 1],
            [1, 0],
            [1, 0],
            [1, 1]
        ]);
    });
});
