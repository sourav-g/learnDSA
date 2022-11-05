let a = [1,10,10,10,20,20,30];
const n = a.length;

console.log(findFirstOccurrence(a,30));

//* TC => O(log n)
//* SC => O(1)
function findFirstOccurrence(a,x){
    let low = 0;
    let high = n-1;
    let firstOccurIndex = n;
    let currentOccurIndex = n;

    while(low<=high){
        const mid = Math.floor((low+high)/2);
        if(a[mid] == x){
            currentOccurIndex = mid;
            if(currentOccurIndex < firstOccurIndex){
                firstOccurIndex = currentOccurIndex;
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

console.log(firstFirstOccurrence_Rec(a,30,0,n-1,n,n));

//* TC => O(log n)
//* SC => O(log n)
function firstFirstOccurrence_Rec(a,x,low,high,currentIndex,firstIndex){
    if(low > high){
        return firstIndex == n ? -1 : firstIndex;
    }
    const mid = Math.floor((low+high)/2);
    if(a[mid] == x){
        currentIndex = mid;
        if(currentIndex < firstIndex){
            firstIndex = currentIndex;
        }
        return firstFirstOccurrence_Rec(a,x,low,mid-1,currentIndex,firstIndex);
    }else if(x < a[mid]){
        return firstFirstOccurrence_Rec(a,x,low,mid-1,currentIndex,firstIndex);
    }else{
        return firstFirstOccurrence_Rec(a,x,mid+1,high,currentIndex,firstIndex);
    }
}