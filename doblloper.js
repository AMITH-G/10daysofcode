//implementing stack using a doubly linked list
class node
{
    constructor(x)
    {
        this.data=x;
        this.leftlink=null;
        this.rightlink=null;
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
    newnode.rightlink=this.head;
    this.head=newnode;
}
function pop()
{
 var temp=this.head.rightlink;
 this.head.data=temp.data;
 this.head.rightlink=temp.rightlink;   
}
function print()
{
    var temp=this.head;
    while(temp)
    {
        console.log(temp.data);
        temp=temp.rightlink;
    }
}
for(var i=1;i<=5;i++)
push(i);
console.log("Operations on stack using doublely linked list");
print();
console.log("-----------------------");
pop();
print();