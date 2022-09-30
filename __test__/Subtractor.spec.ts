import { describe, expect, test } from "vitest";
import { Subtractor, BitsUtil } from "../src/main";

describe("Subtractor", () => {
    test("Half Subtractor", () => {
        const result = BitsUtil.generateSignals(2).map(m => {
            const add = Subtractor.halfSubtractor(m[0], m[1]);
            return [add.borrow, add.difference];
        });
        expect(result).toStrictEqual([
            [0, 0],
            [1, 1],
            [0, 1],
            [0, 0],
        ]);
    });

    test("Full Subtractor", () => {
        const result = BitsUtil.generateSignals(3).map(m => {
            const add = Subtractor.fullSubtractor(m[0], m[1], m[2]);
            return [add.borrow, add.difference];
        });
        expect(result).toStrictEqual([
            [0, 0],
            [1, 1],
            [1, 1],
            [1, 0],
            [0, 1],
            [0, 0],
            [0, 0],
            [1, 1],
        ]);
    });
});