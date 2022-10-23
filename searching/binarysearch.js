let a = [2,4,5,6,9,8];

let x = 7;
let l = 0;
let h = a.length-1;

let foundIndex = -1; 
console.log(binarySearch(l,h));

function binarySearch(low,high){
    let mid = Math.floor((low+high)/2);
    while(low<=high){
        if(a[mid]==x) {
            console.log(`${x} found @ Index = ${mid}`);
            foundIndex = mid;
            break;
        }else if(a[mid]>x){
            foundIndex = binarySearch(low,mid);
        }else{
            foundIndex = binarySearch(mid+1,high);
        }
        if(foundIndex!=-1)break;
    }
    return foundIndex;
}