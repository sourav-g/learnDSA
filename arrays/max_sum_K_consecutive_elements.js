let a = [1,8,30,-5,20,7]; //n=6
const K = 3;

maxSumEfficient(a);

//*TC => O((n-K)K) = O(nK-K^2) -> O(nK)
function maxSum(a){
    const n = a.length
    let maxSum = a[0];
    let sum = a[0];
    for(let i=0; i<=(n-K); i++){    //~ n-K = 6-3=3 -> O(n-K)
        sum = 0;
        for(let j=i; j<(i+K); j++){ //~ sliding interval of K -> O(K)
            sum+=a[j];
        }
        if(sum > maxSum) maxSum=sum;
    }
    if(sum > maxSum) maxSum=sum;
    console.log(maxSum);
}


//* Using `Sliding Window` technique
//* TC => O(K+n-K) = O(n)
function maxSumEfficient(a){
    const n = a.length;
    let maxSum = 0;
    let sum = 0;
    for(let i=0; i<=(K-1); i++){ //~ K=3 , O(K), initial computation
        sum+=a[i];
    }
    if(sum > maxSum) maxSum=sum;

    //n-K slides required
    for(let j=1; j<(n-K); j++){  //~ O(n-K), (6-3=3 slides)
        const minusElem = a[j-1];
        const plusElem = a[j+K-1]
        sum = sum - minusElem + plusElem;
        if(sum > maxSum) maxSum=sum;
    }
    console.log(maxSum);
}