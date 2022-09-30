import { AND, OR, XOR, XNOR, NAND, NOR, NOT, BUFFER } from "../gates/gates";
import { generateSignals } from "./bits";

const LogicGates = {
    AND,
    OR,
    NOT,
    NAND,
    NOR,
    XOR,
    XNOR,
    BUFFER
};

export interface TruthTable {
    gate: keyof typeof LogicGates,
    result: Array<{
        input: number[];
        output: number;
    }>;
}

/**
 * Generates truth table of the given logic gate
 * @param gate The logic gate
 */
export function truthTable<K extends keyof typeof LogicGates>(gate: K): TruthTable;
export function truthTable<K extends "ALL">(gate: K): TruthTable[];
export function truthTable(): TruthTable[];
export function truthTable<K extends (keyof typeof LogicGates | "ALL")>(gate?: K): TruthTable | TruthTable[] {
    if (!gate || gate === "ALL") {
        return Object.entries(LogicGates).map(m => truthTable(m[0] as keyof typeof LogicGates));
    } else {
        const signals = gate === "NOT" || gate === "BUFFER" ? generateSignals(1) : generateSignals(2);
        const result = signals.map((m) => {
            const val = LogicGates[gate as keyof typeof LogicGates](...m as [number, number]);
            return { input: m, output: val };
        });
        return { gate, result };
    }
}
