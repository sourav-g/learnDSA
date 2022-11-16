let a = [1,10,10,10,20,20,30];
const n = a.length;

let x = 20; //input

let t1 = performance.now();
console.log(findFirstOccurrence(a,x));
let t2 = performance.now();
console.log(`Took ${(t2-t1).toFixed(4)} ms`);

//* TC => O(log n)
//* SC => O(1)
export function findFirstOccurrence(a,x){
    let low = 0;
    let high = n-1;
    let firstOccurIndex = n;
    let currentOccurIndex = n;

    while(low<=high){
        const mid = Math.floor((low+high)/2);
        if(a[mid] == x){
            //~ This comparison is not required, since SORTED
            /*currentOccurIndex = mid;
            if(currentOccurIndex < firstOccurIndex){
                firstOccurIndex = currentOccurIndex;
            }*/
            if(mid == 0 || a[mid-1] != a[mid]){
                return mid;
            }
            high = mid-1;
        }else if(x < a[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return firstOccurIndex == n ? -1 : firstOccurIndex;
}


t1 = performance.now();
console.log(firstFirstOccurrence_Rec(a,x,0,n-1,n,n));
t2 = performance.now();
console.log(`Took ${(t2-t1).toFixed(4)} ms`);

//* TC => O(log n)
//* SC => O(log n)
function firstFirstOccurrence_Rec(a,x,low,high,currentIndex,firstIndex){
    if(low > high){
        return firstIndex == n ? -1 : firstIndex;
    }
    const mid = Math.floor((low+high)/2);
    if(a[mid] == x){
        //~ This comparison is not required, since SORTED
        /*currentIndex = mid;
        if(currentIndex < firstIndex){
            firstIndex = currentIndex;
        }*/
        if(mid == 0 || a[mid-1] != a[mid]){
            return mid;
        }
        return firstFirstOccurrence_Rec(a,x,low,mid-1,currentIndex,firstIndex);
    }else if(x < a[mid]){
        return firstFirstOccurrence_Rec(a,x,low,mid-1,currentIndex,firstIndex);
    }else{
        return firstFirstOccurrence_Rec(a,x,mid+1,high,currentIndex,firstIndex);
    }
}