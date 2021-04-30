//counting the number of occurence of a character in a given string 
function occurence(str,ch)
{
    var i,j,count=0;
    if(str.length%2!=0)
    {
        let m=str.length/2;
        if(str[m-1]==ch)
        count++;
    }
    for(i=0,j=str.length-1;i<j;i++,j--)
    {
        if(str[i]==ch)
        count++;
        if(str[j]==ch)
        count++;
    }
    console.log(count);
}
occurence('hiii','i');