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
            return(array);
    }
}       
function Stats(arr)
{
    var mean,median,mode;
    for()
}