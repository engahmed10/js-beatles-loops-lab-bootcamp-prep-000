// add solution here
function theBeatlesPlay(arrmu,arrinst)
{
  var emparr =[];
  for(var i=0 ;i<arrmu.length;i++)
  {
    
    emparr[i]=`${arrmu[i]} plays ${arrinst[i]}`;
    
  }
  return emparr
}
function johnLennonFacts(arr)
{
  var i=0;
  while(i < arr.length)
  {
    arr[i]=`${arr[i]}!!!`
    i++;
  }
  return arr
}

function iLoveTheBeatles(num)
{
  
     var arr=[];
    do
    {
     // for(var i=0;i<8;i++){
      arr= "I love the Beatles!"
     // }
      num++;
      
    } while(num < `15`)
    
   return arr
}