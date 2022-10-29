let a = [2,3,-8,7,-1,2,3];  

maxSumEfficient(a);

//* TC => O(n^2)
function maxSum(a){
    const n = a.length;
    let maxSum = sum = a[0];
    for(let i=0; i<n; i++){
        sum = 0;
        for(let j=i; j<n; j++){     //include from i and not i+1, since single
            sum += a[j];            //element array can have the largest SUM like -1
            if(sum > maxSum) maxSum = sum;
        }
    }
    if(sum > maxSum) maxSum = sum;
    console.log(maxSum);
}

//* Kadanes algorithm (DP Iterative ?)
//? maxEnding(i) = max(maxEnding(i-1),a[i])
//* TC => O(n)
function maxSumEfficient(a){
    const n = a.length;
    let maxSum = a[0];
    let maxEndingSum = a[0];
    for(let i=1; i<n; i++){
        if(maxEndingSum+a[i] > a[i]){
            maxEndingSum = maxEndingSum+a[i];
        }else{
            maxEndingSum = a[i];
        }
        if(maxEndingSum>maxSum) maxSum = maxEndingSum;
    }
    console.log(maxSum);
}