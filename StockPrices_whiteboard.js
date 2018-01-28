//given an array of n integers representing stock prices on a single day
//fidn a pair (buyDay, sellDay) with buyDay <= sellDay
//when bought on buyDay and sold on sellDay, profit would be maximized

const stockPrices = [5,2,10,20,3];
const stockPrices2 = [5,25,3,18,24];
const stockPrices3 = [5,2,10,20,3,1];
//return 18


function stockProfit(arr){
  let buyDay = 0;
  let sellDay = null;
  let profit = null;
  
  for(var i=1; i<arr.length; i++){
    if(arr[i] < arr[buyDay]){
      buyDay = i;
    }
//     if(profit==null && (arr[i]-arr[buyDay])>0){
//       profit = arr[i] - arr[buyDay];
//       sellDay = i;
//     }else if((arr[i]-arr[buyDay])>profit){
//       profit = arr[i]-arr[buyDay];
//       sellDay = i;
//     }
    if(((arr[i]-arr[buyDay])>profit)){
      profit = arr[i]-arr[buyDay];
      sellDay = i;
    }
    
  }
  
  return [profit, buyDay, sellDay];
}

console.log(stockProfit(stockPrices2));
console.log(stockProfit(stockPrices));
console.log(stockProfit(stockPrices3));