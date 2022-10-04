import { halfAdder } from "../adder/adder";
import { validateBit, XOR } from "../gates/gates";
import { binary } from "./bits";

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
                    return String(
                        halfAdder(
                            parseInt(a[0]) as binary,
                            parseInt(m) as binary
                        ).sum
                    );
                if (a.length === i + 1)
                    return String(
                        XOR(parseInt(a[i - 1]) as binary, parseInt(m) as binary)
                    );
                if (a[i + 1] != null)
                    return String(
                        XOR(parseInt(m) as binary, parseInt(a[i + 1]) as binary)
                    );
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

/**
 * Converts the given binary number into Excess-3 Code
 * @param n The binary number
 */
export function binaryToExcess3(n: number): number {
    const decimal = parseInt(`${n}`, 2);
    const num = decimal.toString().length;
    const pre = `${decimal + parseInt("3".repeat(num))}`;
    const post = pre
        .split("")
        .map((m) => {
            return parseInt(m).toString(2).padStart(4, "0");
        })
        .join("");
    return parseInt(post);
}
