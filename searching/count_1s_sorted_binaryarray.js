let a = [0,0,1,1,1,1,1,1];
const n = a.length;

//* Since only 1s and 0s, finding first occurrence of 1 is enough

console.log(countOnes(a,0,n-1));


function countOnes(a,low,high){
    if(low > high) return 0;
    let mid = Math.floor((low+high)/2);
    if(a[mid] == 1){
        if(mid == 0 || a[mid-1] == 0){
            return (n-mid);
        } 
        return countOnes(a,low,mid-1);
    }else{
        return countOnes(a,mid+1,high);
    }
}