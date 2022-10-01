import { halfAdder } from "../adder/adder";
import { validateBit, XOR } from "../gates/gates";

/**
 * Converts the given binary number into gray code
 * @param n The number to convert
 */
export function binaryToGrayCode(n: number): number {
    return parseInt(
        n
            .toString()
            .split("")
            .map((m, i, a) => {
                validateBit(parseInt(m));
                if (i === 0) return m;
                if (i === 1)
                    return String(halfAdder(parseInt(a[0]), parseInt(m)).sum);
                if (a.length === i + 1)
                    return String(XOR(parseInt(a[i - 1]), parseInt(m)));
                if (a[i + 1] != null)
                    return String(XOR(parseInt(m), parseInt(a[i + 1])));
            })
            .join("")
    );
}

/**
 * Converts the given binary number into gray code
 * @param n The number to convert
 */
export function binaryToGreyCode(n: number): number {
    return binaryToGrayCode(n);
}

/**
 * Converts the given decimal number into binary number.
 * Hexadecimal, octal can be converted by `toBinary(0xff)`, `toBinary(0o45)` respectively.
 * @param n The number
 */
export function toBinary(n: number): number {
    return parseInt(n.toString(2));
}
