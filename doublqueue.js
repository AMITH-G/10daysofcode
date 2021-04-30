//Implementing doublly linked list on queue
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

function enqueue(val)  
{
    var newnode=new node(val);
   if(this.head==null)
   this.head=null;
   else{
       var temp=this.head;
       while(temp.rightlink)
       {
           temp=temp.rihtlink;
       }
       temp.rightlink=newnode;
       newnode.leftlink=temp;
   }
}
function dequeue()
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
enqueue(i);
console.log("Operations on stack using doublely linked list");
print();
console.log("-----------------------");
dequeue();
print();