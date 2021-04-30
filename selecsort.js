//Selection sort algorithm implementation
function selectionSort(arr) {
    if(arr.length>0)
    {
        for (let i = 0; i < arr.length; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = arr[i];
                arr[i] = arr[min];
                arr[min] = tmp;
            }
        }
       console.log (arr);
    }
    else
    console.log("Enter the valid array");
}
selectionSort([]);
selectionSort([2,4,3,7,5,9]);