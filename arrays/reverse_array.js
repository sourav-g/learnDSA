let a = [10,5,7,30];
let b = [30,23,-6,3,2,78,299]

reverseArray(a);
reverseArray(b);

//TC = O(n)
function reverseArray(a){
    const len = a.length;
    for(let i=0,j=len-1; i<j; i++,j--){
        a[i] = a[i]+a[j];    //* swapping without using extra variable
        a[j] = a[i]-a[j];
        a[i] = a[i]-a[j];
    }
    console.log(a);
}