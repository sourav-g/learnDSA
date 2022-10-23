let a = [];
let len = a.length;

// TC = O(n)
// can use i-1 instead of extra variable j

let isSorted = true;
for(let i=1,j=0; i<len-1,j<len-2; i++,j++){
    if(a[i] < a[j]){
        isSorted = false;
    }
}
console.log(isSorted);