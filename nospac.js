//nospace in a string
function nospace(str1)
{
    if(str1.length)
    {
        var str="";
           for(var i=0;i<str1.length;i++)
          {
              if(str1[i]!=' ')
              str+=str1[i];
          }
          console.log(str);
    }
    else
    console.log("Please enter valid string length");
}
nospace("");
nospace("hi hello how");
