import { describe, expect, test } from "vitest";
import { TruthTable } from "../src/main";

describe("Truth Table", () => {
    test("AND Gate", () => {
        const { result } = TruthTable.truthTable("AND");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([0, 0, 0, 1]);
    });

    test("OR Gate", () => {
        const { result } = TruthTable.truthTable("OR");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([0, 1, 1, 1]);
    });

    test("NOT Gate", () => {
        const { result } = TruthTable.truthTable("NOT");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([1, 0]);
    });

    test("NAND Gate", () => {
        const { result } = TruthTable.truthTable("NAND");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([1, 1, 1, 0]);
    });

    test("NOR Gate", () => {
        const { result } = TruthTable.truthTable("NOR");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([1, 0, 0, 0]);
    });

    test("XOR Gate", () => {
        const { result } = TruthTable.truthTable("XOR");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([0, 1, 1, 0]);
    });

    test("XNOR Gate", () => {
        const { result } = TruthTable.truthTable("XNOR");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([1, 0, 0, 1]);
    });

    test("BUFFER Gate", () => {
        const { result } = TruthTable.truthTable("BUFFER");
        expect(result.map((m) => m.output).flat(1)).toStrictEqual([0, 1]);
    });
});
