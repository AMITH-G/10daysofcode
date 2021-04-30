//GCD of two numbers 
function GCD(x,y)
{
    var rem=x%y;
    while(rem!=0)
    {
        x=y;
        y=rem;
        rem=x%y;
    }
    console.log(`GCD ${y}`);
}

GCD(12,20);