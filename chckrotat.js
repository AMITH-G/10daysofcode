//checking if two strings are a rotation of each other
function checkrotat(str1,str2)
{
    if(str1.length && str2.length)
    {
      if(str1.length==str2.length)
       {
           for(var i=0,j=str2.length-1;i<j;i++,j--)
          {
              if(str1[i]!=str2[j])
              return console.log("These two strings are not a rotation of each other");
          }
          console.log("These two strings are a rotation of each other");
      }
      else
      console.log("Stings length are not same");
    }
    else
    console.log("Please enter valid string length");
}
checkrotat("hello","");
checkrotat("hello","hi");
checkrotat("madam","madam");
checkrotat("hello","hello");