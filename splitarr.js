//Split the array and add the first part to the end
function splitarr(arr,split)
{
    if(arr.length)
    {
        if(split<arr.length)
        {
            var j=arr.length;
            for(var i=0;i<=j;i++)
            {
                if(i<split)
                {
                    arr[j]=arr[i];
                    arr[i]=arr[i+1];
                    j--;
                }
                else
                arr[i]=arr[i+1];
            }
            console.log(arr);
        }
    }
    else
    console.log("Empty array!!!");
}
splitarr([1,2,3],1);