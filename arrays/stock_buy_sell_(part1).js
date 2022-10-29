let prices = [1,5,3,8,12];

findMaxPriceDifference(prices);

function maximumProfit(prices){

    for(let i=0; i<n; i++){
        
    }
}

function findMaxPriceDifference(a){
    let min = a[0];
    let n = a.length;
    let maxDiff = 0;
    for(let i=1; i<n; i++){
        if(a[i]-min > 0){
            if(a[i]-min > maxDiff)
                maxDiff=a[i]-min;
        }else{
            min = a[i];
        }
    }
    console.log(maxDiff);
}