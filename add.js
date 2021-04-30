//add 1 to a number specified in linked list

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
function addone(num,addup)//adding extra values to a number specified in linked list
{
    var temp=this.head;
    var temp2=temp.link;
    while(temp2 && temp)
    {
        if(temp.data==num)
            temp.data+=addup;
         if(temp2.data==num)
            temp2.data+=addup;
        temp=temp.link;
        temp2=temp.link;
    }
}
insert(3);
insert(2);
insert(3);
insert(3);
print();
console.log("---------------------------------");
addone(3,7);
print();