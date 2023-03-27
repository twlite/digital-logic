import { binary } from "./../utils/bits";
/**
 * Checks if the given bit is a valid bit
 * @param bit The bit
 */
export function isValidBit(bit: number): bit is binary {
    return [0, 1].includes(bit);
}

/**
 * Throws error if any of the given bit is invalid
 * @param bits The bits
 */
export function validateBit(...bits: number[]): void {
    for (const bit of bits) {
        if (!isValidBit(bit)) throw new TypeError(`Invalid bit "${bit}"`);
    }
}

/**
 * Logical AND gate
 */
export function AND(...inputs: binary[]): binary {
    validateBit(...inputs);
    return +inputs.every((i) => i === 1) as binary;
}

/**
 * Logical OR gate
 */
export function OR(...inputs: binary[]): binary {
    validateBit(...inputs);
    return +inputs.some((i) => i === 1) as binary;
}

/**
 * Logical NOR gate
 */
export function NOR(...inputs: binary[]): binary {
    validateBit(...inputs);
    return +!OR(...inputs) as binary;
}

/**
 * Logical NOT gate
 * @param a Input bit
 */
export function NOT(a: binary): binary {
    validateBit(a);
    return +!a as binary;
}

/**
 * Logical NAND gate
 */
export function NAND(...inputs: binary[]): binary {
    return +!AND(...inputs) as binary;
}

/**
 * Logical XNOR gate
 */
export function XNOR(...inputs: binary[]): binary {
    validateBit(...inputs);
    return +!XOR(...inputs) as binary;
}

/**
 * Logical XOR gate
 */
export function XOR(...inputs: binary[]): binary {
    let lastInput = inputs[0],
        matchCount = 0;
    for (const input of inputs) {
        if (lastInput !== input) matchCount++;
    }
    return +(matchCount % 2 !== 0) as binary;
}

/**
 * Logical BUFFER gate
 * @param a Input bit
 */
export function BUFFER(a: number) {
    validateBit(a);
    return a;
}
