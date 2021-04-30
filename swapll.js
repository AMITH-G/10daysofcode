//Swap the values of linked list 

class node
{
    constructor(x)
    {
        this.data=x;
        this.link=null;
    }
}
class linkedlist
{
    constructor() 
    {
        this.head=null;
        this.size=0;
    }
}

function insert(val)
{
    var newnode=new node(val);
    if(this.head==null)
    this.head=newnode;
    else
    {
        var temp=this.head;
        while(temp.link)
        {
            temp=temp.link;
        }
        temp.link=newnode;
    }
    this.size++;
}

function print()
{
    var temp=this.head;
    while(temp)
    {
        console.log("->"+temp.data);
        temp=temp.link;
    }
}

function moveto(m)
{
    var temp=this.head;
    for(var i=1;i<m;i++)
    temp=temp.link;
    return temp;
}

function revswap(a,b)  //reversing the data of linked list
{
    x=moveto(a);
    y=moveto(b);
    x.data+=y.data;
    y.data=x.data-y.data;
    x.data-=y.data;
}

for(var i=1;i<=5;i++)
insert(i);
print();
console.log("-----------------");
revswap(2,5);
print();