//Counting sort implementation 
function countingSort(arr){
    var counter = []; 
    for(var i = 0; i<arr.length; i++){
      if(!counter[arr[i]]){
         counter[arr[i]]=1;
      }else{
         counter[arr[i]]+=1;
      }
    }
   var newArr = []; 
      while(counter[i]>0){
          newArr+=counter[i];
          counter[i]--;
      
    }
    console.log(newArr); 
  }
 countingSort([5,4,3,2,1,0]); 