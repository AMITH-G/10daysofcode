//finding a substring in a main string 
function finding(str,substr)
{
    if(str.length)
    {
        if(str.length>=substr.length)
        {
            var i=0,j=0;
            Boolean=false;
            while(i<=str.length-1 && j<=substr.length-1)
            {
                if(str[i]==substr[j])
                {
                    i++;
                    j++;
                    Boolean=true;
                }
                else
                {
                    j=0;
                    i++;
                    Boolean=false;
                }
            }
            if(Boolean)
            console.log("found");
            else
            console.log("not found");
        }
        else
        console.log("Please enter valid Substring");
    }
    else
    console.log("Please enter valid String");
}
finding("","ell");
finding("hi","hello");
finding("hihello","ell");
finding("hihello","how");