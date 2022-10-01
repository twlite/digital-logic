import { validateBit } from "../gates/gates";

/**
 * Default expression notation list
 */
export const DefaultExprNotation = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

export const ExprRegex = /^[A-Za-z]{1}'?$/;

/**
 * Transforms the given signals into expression
 * @param signals The signal list
 * @param notation The notation list
 */
export function transform(signals: number[], notation = DefaultExprNotation) {
    validateBit(...signals);

    return signals.map((m, i) => {
        if (notation[i] == null)
            throw new Error(`index out of range: ${i} (<=${notation.length})`);
        return !m ? `${notation[i]}'` : notation[i];
    });
}

/**
 * Converts the given signals into expression string
 * @param signals The signal
 * @param notation The notation
 */
export function toExpression(
    signals: number[],
    notation = DefaultExprNotation
) {
    const res = transform(signals, notation);
    return res.join("");
}
