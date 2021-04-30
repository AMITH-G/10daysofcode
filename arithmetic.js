function arith(choice,a,b) //Simple arithmetic operations using switch condition 
{
    switch(choice)
    {
        case 1:console.log(`Sum = ${a+b}`);
                break;
        case 2:console.log(`Difference = ${a-b}`);
                break;
        case 3:console.log(`Product = ${a*b}`);
                break;
        case 4:console.log(`Quotient = ${a/b}`);
                break;
        default : console.log("Wrong choice");
    }
}
arith(1,2,3);
arith(2,12,5);
arith(3,3,7);
arith(4,18,6);
arith(7,2,3);