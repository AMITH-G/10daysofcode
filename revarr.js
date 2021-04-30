//Reversing an array elements using swapping method
function revarr(arr)
{
    if(arr.length)
    {
        for(var i=0,j=arr.length-1;i<j;i++,j--)
        {
            arr[i]=arr[i]+arr[j];
            arr[j]=arr[i]-arr[j];
            arr[i]=arr[i]-arr[j];
        }
        console.log(arr);
    }
    else
    console.log("Please provide valid array")
}
revarr([11,22,33,44]);