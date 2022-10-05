/**
 * Binary to Decimal converter
 * @param {string} string of binary number
 * @return {number} decimal number
 * @example
 * const { Conversion } = require("digital-logic");
 *
 * const decimalNumber = Conversion.binaryToDecimal("101.101");
 * console.log(decimalNumber);
 */
export function binaryToDecimal(bn: string) {
    const twoPower = (n: number) => 2 ** n;

    const [bp, ap] = bn.split(".");
    const bpd = parseInt(bp, 2);

    let apd = 0;
    if (ap) {
        ap.split("").forEach((ns, i) => {
            apd += twoPower(-(i + 1)) * Number(ns);
        });
    }

    return bpd + apd;
}

/**
 * Binary to Decimal converter
 * @param {number}  decimal number
 * @return {string} string of binary number
 * @example
 * const { Conversion } = require("digital-logic");
 *
 * const binaryNumber = Conversion.decimalToBinary(5.625);
 * console.log(binaryNumber);
 */
export function decimalToBinary(bn: number) {
    const [bp, ap] = bn.toString().split(".");
    const bpb = Number(bp).toString(2);
    if (!ap) return bpb + "";

    let apb = Number(`0.${ap}`);
    const arr = [];

    for (let i = 0; i < 5; i++) {
        apb = 2 * apb;
        const [a, b] = apb.toString().split(".");
        arr.push(a);
        if (b === undefined) break;
        apb = +`0.${b}`;
    }

    return `${bpb}.${arr.join("")}`;
}
