//Sum of all sub arrays 

    function findSum(arr)
    {
        var arrSize = arr.length;
        var Sum = 0;
        for (var startPoint = 0; startPoint <arrSize ; startPoint++) 
        {
            for (var grps = startPoint; grps <=arrSize ; grps++) 
            {
                for (var  j = startPoint ; j < grps ; j++) 
                {
                   Sum += arr[j];
                }
            }
        }
        console.log("Sum of elements of sub arrays is "+Sum);
    }
 
findSum([1,2,3,4]);
    
