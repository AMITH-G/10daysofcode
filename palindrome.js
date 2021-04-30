function palindrome(str)
{
    if(str.length!=0)
    {
        for(var i=0,j=str.length-1;i<j;i++,j--)
        {
            if(str[i]!=str[j]){
            return console.log("The given string is not a palindrome!");
            }
        }
        console.log("The given string is palindrome!");
    }
    else
    console.log('Please enter valid string');
}
palindrome("madam");
palindrome("sir");
palindrome("anna");