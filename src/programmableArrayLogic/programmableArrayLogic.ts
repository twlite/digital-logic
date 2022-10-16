import { validateBit, NOT, AND, OR } from "../gates/gates";
import { binary } from "../utils/bits";

/**
 * 
 * @param bits an array of all the binary inputs
 * @param andConnections A function to check which input should be connected to which and gate
 * @returns {binary[]} Output from all the OR gates
 */
export function programmableArrayLogic(bits: binary[], andConnections = defaultFunction): binary[] {
    validateBit(...bits);

    const n = bits.length,
        m = Math.pow(n, 2);

    const compliments = bits.map((v) => NOT(v)),
        inputs = [...bits, ...compliments];

    const ands = Array.from({ length: m }, (v, gateIndex) => {
        const validInputs: binary[] = inputs.filter((v, inputIndex) => andConnections(gateIndex, inputIndex));

        return validInputs.length === 0 ? 0 : AND(...validInputs);
    });

    return Array.from({ length: n }, (v, gateIndex) => OR(...ands.filter((v, inputIndex) => inputIndex >= gateIndex * n && inputIndex < gateIndex * n + n)));
}

/**
 * 
 * @param {number} gateIndex Index of the gate
 * @param {number} inputIndex Index of the input
 * @returns 
 */
const defaultFunction = (gateIndex: number, inputIndex: number) => true;