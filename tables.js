//Generating tables of value n
function tabgen(n,m)
{
    for(var i=1;i<=m;i++)
    {
        console.log(`${n}*${i}=${n*i}`);
    }
}
tabgen(2,10);