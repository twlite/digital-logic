import { AND, NOT, OR, XOR } from "../gates/gates";

/**
 * The half subtractor
 * @param a Input bit
 * @param b Input bit
 */
export function halfSubtractor(a: number, b: number) {
    const difference = XOR(a, b);
    const borrow = AND(NOT(a), b);

    return { difference, borrow };
}

/**
 * The full subtractor
 * @param a Input bit
 * @param b Input bit
 * @param c Borrow bit
 */
export function fullSubtractor(a: number, b: number, c = 0) {
    const hs = halfSubtractor(a, b);
    const val = halfSubtractor(hs.difference, c);

    return { difference: val.difference, borrow: OR(hs.borrow, val.borrow) };
}
