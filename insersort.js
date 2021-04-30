//Insertion sort algorithm implementation 
function inserSort (array) {
    if(array.length>0)
    {
            var i=1;
            while( i < array.length) {
                var  m= array[i],j = i - 1;
                while (j >= 0 && m<array[j] ) {
                    array[j + 1] = array[j];
                    j = j - 1;
                }
                array[j + 1] = m;
                i++;
            }
            console.log(array);
    }
    else
    console.log("Enter the valid array");   
};
inserSort([])
inserSort([10,4,87,45,12,2,7]);