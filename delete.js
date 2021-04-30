//Deleting n nodes from m node

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
function delet(n,m)
{
        var head=moveto(m);
        var temp=head;
       for(var i=0;i<=n;i++)
        temp=temp.link;
        head.link=temp;   
}
for(var i=1;i<=8;i++)
insert(i);
print();
console.log("---------------------------------");
delet(2,3);//Deleting n nodes from m node
print();
