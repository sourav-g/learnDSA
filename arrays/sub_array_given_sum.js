let a = [1,4,20,3,10,5];

const sum = 33;

console.log(isGivenSumSubArray(a,sum));
//* Use sliding window with window of `variable` size

function isGivenSumSubArray(a,targetSum){
    let start=0;
    let end=0;
    let currentSum = 0;
    while(start<=end){
        currentSum = windowSum(a,start,end);
        if(currentSum < targetSum){
            currentSum = windowSum(a,start,++end);
            continue;
        }
        if(currentSum > targetSum){
            currentSum = windowSum(a,++start,end);
            continue;
        }
        if(currentSum == targetSum) return true;
    }
    return false;
}

function windowSum(a,start,end){
    let sum=0;
    for(let j=start; j<end; j++){
        sum += sum[j];
    }
    return sum;
}