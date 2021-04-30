function reverse(str)
{
    var strrev="";
    for(var j=str.length-1;j>=0;j--){
        strrev+=str[j];
    }
    console.log(strrev);   
}
reverse("hello");