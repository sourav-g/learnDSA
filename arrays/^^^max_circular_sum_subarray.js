let a = [3,-4,5,6,-8,7];

maxCircularSumModulo(a);

//* TC => O(n^2)
function maxCircularSum(a){
    const n = a.length;
    let maxSum = sum = a[0];
    for(let i=0; i<n; i ++){
        sum = 0;
        for(let j=i; j<n; j++){
            sum += a[(i+j)%n];
            if(sum > maxSum) maxSum = sum;
        }
        for(let m=0; m<i; m++){
            sum += a[m];
            if(sum > maxSum) maxSum = sum;
        }
    }
    if(sum > maxSum) maxSum = sum;
    console.log(maxSum);
}

//* TC => O(n^2) ; using `Module Arithmetic`
function maxCircularSumModulo(a){
    const n = a.length;
    let maxSum = sum = a[0];
    for(let i=0; i<n; i ++){
        sum = 0;
        for(let j=0; j<n; j++){
            sum += a[(i+j)%n];  //! Learn modulo techniques
            if(sum > maxSum) maxSum = sum;
        }
    }
    if(sum > maxSum) maxSum = sum;
    console.log(maxSum);
}