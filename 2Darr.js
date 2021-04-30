//Two dimensional array
let  twoD = new Array(3); 
for (let i = 0; i < twoD.length; i++) { 
    twoD[i] = new Array(3);
}
twoD[0][0]='1';
twoD[0][1]='2';
twoD[0][2]='3';
twoD[1][0]='4';
twoD[1][1]='5';
twoD[1][2]='6';
twoD[2][0]='7';
twoD[2][1]='8';
twoD[2][2]='9';
function Snake(arr)
{
    var resarr="";
    for(var i=0;i<arr.length;i++)
    {
       for(var j=0;j<arr.length;j++)
       {
           resarr+=arr[j][i];
       }
    }
    console.log(resarr);
}
console.table(twoD);
console.log("------Snake Pattern---------");
Snake(twoD);