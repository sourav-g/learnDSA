let a = [2,4,5,6,8,9];

console.log(binarySearch(a,0,a.length-1,9));

//*TC => O(log n)
//*SC => O(log n) -> log n times worst case recurrsive calls
function binarySearch(a,low,high,x){
    
    if(low > high) return -1;
    
    let mid = Math.floor((low+high)/2);
    if(a[mid]==x){
        return mid;
    }else if(x < a[mid]){
        return binarySearch(a,low,mid-1,x);
    }else{
        return binarySearch(a,mid+1,high,x);
    }
}