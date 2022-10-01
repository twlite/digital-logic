import { AND, OR, XOR } from "../gates/gates";

/**
 * The half adder
 * @param a Input bit
 * @param b Input bit
 */
export function halfAdder(a: number, b: number) {
    const sum = XOR(a, b);
    const carry = AND(a, b);

    return { sum, carry };
}

/**
 * The full adder
 * @param a Input bit
 * @param b Input bit
 * @param c Carry bit
 */
export function fullAdder(a: number, b: number, c = 0) {
    const hs = XOR(a, b);
    const sum = XOR(hs, c);
    const carry = OR(AND(hs, c), AND(a, b));

    return { sum, carry };
}
