//* Binary Search WORKS only for SORTED ARRAY

let a = [2,4,5,6,8,9];

console.log(binarySearch(a,9));

//* TC => O(log n)
function binarySearch(a,x){
    const n = a.length;
    let low = 0;
    let high = n-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        //console.log('-->'+mid);
        if(a[mid] == x) return mid;
        else if(x < a[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}