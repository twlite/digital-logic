import { validateBit, NOT, AND, OR } from "../gates/gates";
import { binary } from "../utils/bits";

/**
 * 
 * @param bits an array of all the binary inputs
 * @param andConnections A function to check which input should be connected to which and gate
 * @param orConnections A function to check which input should be connected to which or gate
 * @returns {binary[]} Output from all the OR gates
 */
export function programmableLogicArray(bits: binary[], andConnections = defaultFunction, orConnections = defaultFunction): binary[] {
    validateBit(...bits);

    const n = bits.length,
        m = Math.pow(2, n) / 2;

    const compliments = bits.map((v) => NOT(v)),
        inputs = [...bits, ...compliments];

    const ands = Array.from({ length: Math.pow(2, n) }, (v, gateIndex) => AND(...inputs.filter((v, inputIndex) => andConnections(gateIndex, inputIndex))));

    return Array.from({ length: m }, (v, gateIndex) => OR(...ands.filter((v, inputIndex) => orConnections(gateIndex, inputIndex))));
}

/**
 * 
 * @param {number} gateIndex Index of the gate
 * @param {number} inputIndex Index of the input
 * @returns 
 */
const defaultFunction = (gateIndex: number, inputIndex: number) => true;