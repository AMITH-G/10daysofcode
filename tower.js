//Tower of hanoi using recursion
function tower(num,from,to,mid)
{
    if(num>0)
    {
        if (num == 1)
        {
            console.log(` Move disk 1 from pole ${from} to pole ${to}`);
            return;
        }
        tower(num - 1, from, mid, to);
        console.log(` Move disk ${num} from pole ${from} to pole ${to}`);
        tower(num - 1, mid, to, from);
    }
    else
    console.log("Please enter valid number of disks")
}
tower(-2, 'A', 'C', 'B');
console.log("----------------------")
tower(3, 'A', 'C', 'B');