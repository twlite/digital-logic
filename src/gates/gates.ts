/**
 * Checks if the given bit is a valid bit
 * @param bit The bit
 */
export function isValidBit(bit: number) {
    return [0, 1].includes(bit);
}

/**
 * Throws error if any of the given bit is invalid
 * @param bits The bits
 */
export function validateBit(...bits: number[]) {
    for (const bit of bits) {
        if (!isValidBit(bit)) throw new TypeError(`Invalid bit "${bit}"`);
    }
}

/**
 * Logical AND gate
 * @param a Input bit
 * @param b Input bit
 */
export function AND(a: number, b: number) {
    validateBit(a, b);
    return +(a && b);
}

/**
 * Logical OR gate
 * @param a Input bit
 * @param b Input bit
 */
export function OR(a: number, b: number) {
    validateBit(a, b);
    return +(a || b);
}

/**
 * Logical NOR gate
 * @param a Input bit
 * @param b Input bit
 */
export function NOR(a: number, b: number) {
    validateBit(a, b);
    return +!OR(a, b);
}

/**
 * Logical NOT gate
 * @param a Input bit
 */
export function NOT(a: number) {
    validateBit(a);
    return +!a;
}

/**
 * Logical NAND gate
 * @param a Input bit
 * @param b Input bit
 */
export function NAND(a: number, b: number) {
    return +!AND(a, b);
}

/**
 * Logical XNOR gate
 * @param a Input bit
 * @param b Input bit
 */
export function XNOR(a: number, b: number) {
    validateBit(a, b);
    return +(a === b);
}

/**
 * Logical XOR gate
 * @param a Input bit
 * @param b Input bit
 */
export function XOR(a: number, b: number) {
    return +!XNOR(a, b);
}

/**
 * Logical BUFFER gate
 * @param a Input bit
 */
export function BUFFER(a: number) {
    validateBit(a);
    return a;
}
