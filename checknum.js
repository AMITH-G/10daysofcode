//checking a valid password 
/*password must contain only digits and letters ,it should start with a letter 
 no space is allowed and must be of length between 4 to 16 */
function validation(str)
{
    var len= str.length;
    if(len>=4 && len<=16)
    {
        var i,j,count=0;
        if((str[0]>='a' && str[0]<='z'))
        {
        count++;
         for(i=1,j=len-1;i<=j;i++,j--)
         {
                if((str[i]>=0 && str[i]<=9) || (str[i]>='a' && str[i]<='z'))
                count++;            
                if((str[j]>=0 && str[j]<=9) || (str[j]>='a' && str[j]<='z'))
                count++;                
         }
         if(count==len)
         console.log("valid password");
         else
         console.log("Invalid password");
        }  
         else
          console.log("password should start with a letter");
    }
    else
    console.log("password length should be 4 to 16 characters");
}
validation("hel")
validation("7hel")
validation("hello79")
