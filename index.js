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
function iLoveTheBeatles()
{
  var arr1=[];
   var arr=[];
  for(var i=0;i<18;i++)
  {
   var num=0;
    while(num < 8)
    {
      arr1[num]= "I love the Beatles!"
      num++;
    }
   
    if(i == 17 )
    {
     arr ="I love the Beatles!"
    }
  }
   return arr1
   
  
}