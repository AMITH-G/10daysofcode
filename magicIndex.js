//Magic Index – Find Index In Sorted Array Such That A[i] = i.
function magic(arr,i)
{
    if(arr.length>i)
    {  
        if(i>=0)
        {
            if(arr[i]==i)
            {
              return console.log("Magic index is found");
            }
            else 
            return console.log("Magic index not found");
        }
        else
        console.log("Enter valid INDEX");
    }
    else
    console.log("Please enter valid array");
}
magic([],3);
magic([0,1,2,3,4],-2);
magic([-1,5,11,3,7,23],3);
magic([-7,-2,1,8,87,2],4);