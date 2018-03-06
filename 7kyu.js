/* Difference Of Squares */
function differenceOfSquares(x) {
    function squareSum(x) {
        // Follow PEMDAS from math class.
        // (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction)
        x = x * (x + 1) / 2;
        return Math.pow(x, 2);
    }

    function sumSquare(x) {
        let num = 0;
        for (let i = 0; i < x; i++) {
            num += i + (Math.pow(num, 2));
        }
        return num;
    }

    return squareSum(x) - sumSquare(x);
}
