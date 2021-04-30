//Ouick sort algoritm implementation 
function QuickSort(arr) 
{
    quick(arr, 0, arr.length - 1);
    console.log("arr =", arr);
} 
function quick(A, start, end)
{ 
    if (start >= end) {
        return;
    }
    var SIndex = split(A, start, end);
    quick(A, start, SIndex - 1);
    quick(A, SIndex + 1, end);
}

function split(A, start, end) 
{
    if (A.length > 1 == false) {
        return 0;
    }
    let pivotIndex = Math.ceil((start + end) / 2);
    let pivotValue = A[pivotIndex];
    for (var i = 0; i < A.length; i++) 
    {
        var leftValue = A[i];
        if (i < pivotIndex) {
            if (leftValue > pivotValue) {
                A[pivotIndex] = leftValue;
                A[i] = pivotValue;
                pivotIndex = i;
            }
        }
        else if (i > pivotIndex) {
            if (leftValue < pivotValue) {
                A[pivotIndex] = leftValue;
                A[i] = pivotValue;
                pivotIndex = i;
            }
        }
    }
    return pivotIndex;

}
QuickSort([3, 5, 6, 22, 7, 1, 8, 9]);