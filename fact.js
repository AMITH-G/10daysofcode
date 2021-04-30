//factorial of a given number 
function fact(n)
{
    var i=1,factorial=1
    while(i<=n)
    {
        factorial*=i;
        i++;
    }
    console.log(`factorial =${factorial}`);
}
fact(5);
fact(0);
fact(1);