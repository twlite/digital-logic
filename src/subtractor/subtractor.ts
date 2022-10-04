import { AND, NOT, OR, XOR } from "../gates/gates";
import { binary } from "../utils/bits";

/**
 * The half subtractor
 * @param a Input bit
 * @param b Input bit
 */
export function halfSubtractor(a: binary, b: binary) {
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
export function fullSubtractor(a: binary, b: binary, c: binary = 0) {
    const hs = halfSubtractor(a, b);
    const val = halfSubtractor(hs.difference, c);

    return { difference: val.difference, borrow: OR(hs.borrow, val.borrow) };
}
