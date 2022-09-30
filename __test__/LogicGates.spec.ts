import { describe, expect, test } from "vitest";
import { BitsUtil, LogicGates } from "../src/main";

describe("Logic Gates", () => {
    test("AND Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.AND(m[0], m[1]));
        expect(table).toStrictEqual([0, 0, 0, 1]);
    });

    test("OR Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.OR(m[0], m[1]));
        expect(table).toStrictEqual([0, 1, 1, 1]);
    });

    test("NOT Gate", () => {
        const table = BitsUtil.generateSignals(1).map(m => LogicGates.NOT(m[0]));
        expect(table).toStrictEqual([1, 0]);
    });

    test("NAND Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.NAND(m[0], m[1]));
        expect(table).toStrictEqual([1, 1, 1, 0]);
    });

    test("NOR Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.NOR(m[0], m[1]));
        expect(table).toStrictEqual([1, 0, 0, 0]);
    });

    test("XOR Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.XOR(m[0], m[1]));
        expect(table).toStrictEqual([0, 1, 1, 0]);
    });

    test("XNOR Gate", () => {
        const table = BitsUtil.generateSignals(2).map(m => LogicGates.XNOR(m[0], m[1]));
        expect(table).toStrictEqual([1, 0, 0, 1]);
    });

    test("BUFFER Gate", () => {
        const table = BitsUtil.generateSignals(1).map(m => LogicGates.BUFFER(m[0]));
        expect(table).toStrictEqual([0, 1]);
    });
});