//addition of stack values

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

function push(val)
{
    var newnode=new node(val);
    if(this.head==null)
    this.head=newnode;
    else
    {
       newnode.link=this.head;
       this.head=newnode;
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

function addd()
{
    var sum=0,temp=this.head;
    while(temp)
    {
    sum+=temp.data;
    temp=temp.link;
    }
    console.log(`The sum of the stack is ${sum}`);
}

for(var i=1;i<=5;i++)
push(i);
print();
addd();