import { AND, NOT, OR, XNOR } from "../gates/gates";
import { binary } from "../utils/bits";

/**
 * 2-bit magnitude comparator. Compares [a1, a0] with [b1, b0].
 * @example const A = [1, 0], B = [1, 1];
 * // compares: 10 < 11, 10 = 11, 10 > 11
 * const result = Comparator.magnitudeComparator(...A, ...B);
 * console.log(result); // { lt: 1, eq: 0, gt: 0 }
 */
export function magnitudeComparator(
    a1: binary,
    a0: binary,
    b1: binary,
    b0: binary
) {
    const a1n = NOT(a1),
        a0n = NOT(a0),
        b1n = NOT(b1),
        b0n = NOT(b0);
    const lessThan = () => {
        const a = AND(a1n, b1);
        const b = AND(a0n, b1, b0);
        const c = AND(a1n, a0n, b0);
        return OR(a, b, c);
    };

    const greaterThan = () => {
        const a = AND(a1, b1n);
        const b = AND(a0, b1n, b0n);
        const c = AND(a1, a0, b0n);
        return OR(a, b, c);
    };

    const equal = () => {
        const a = XNOR(a1, b1);
        const b = XNOR(a0, b0);

        return AND(a, b);
    };

    return { lt: lessThan(), eq: equal(), gt: greaterThan() };
}
