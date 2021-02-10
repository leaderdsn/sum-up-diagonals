var matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
];

function sumUpDiagonals(matrix) {
    const n = matrix.length;
    let principal = 0,
        secondary = 0;

    for (let i = 0; i < n; i++) {
        principal += matrix[i][i];
    }

    for (let i = 0; i < n; i++) {
        secondary += matrix[i][n - 1 - i];
    }

    return {
        principal,
        secondary
    };

}

console.log(sumUpDiagonals(matrixExample));