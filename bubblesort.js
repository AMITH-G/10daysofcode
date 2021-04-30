//Bubblesort technique
function bubbleSort(arr) {
    var swap;
    do {
        swap = false;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
    console.log(arr);
}
bubbleSort([12,3,7,18,36,75,43]);