//finding diagonal sum of the array
function diasum(mat) {
 let sum1 = 0, sum2 = 0;
    for (var i = 0; i < mat.length; i++) {
        sum1 += mat[i][i];
        sum2 += mat[i][mat.length-i-1];
    }
    console.log(sum1 + ' ' + sum2);
} 
diasum([[1,2,3],[4,5,6],[7,8,9]]);
diasum([[5,10],[15,7]]);