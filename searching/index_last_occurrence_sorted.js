let a = [1,10,10,20,20,20,30];
const n = a.length;

console.log(findLastOccurrence(a,20));

//* TC => O(log n)
//* SC => O(1)
function findLastOccurrence(a,x){
    let low = 0;
    let high = n-1;
    let lastOccurIndex = -1;
    let currentOccurIndex = -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(a[mid] == x){
            currentOccurIndex = mid;
            if(currentOccurIndex > lastOccurIndex){
                lastOccurIndex = currentOccurIndex;
            }
            low = mid+1;
        }else if(x < a[mid]){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return lastOccurIndex;
}


console.log(firstLastOccurrence_Rec(a,20,0,n-1,-1,-1));

//* TC => O(log n)
//* SC => O(log n)
function firstLastOccurrence_Rec(a,x,low,high,currentIndex,lastIndex){
    if(low > high){
        return lastIndex;
    }
    const mid = Math.floor((low+high)/2);
    if(a[mid] == x){
        currentIndex = mid;
        if(currentIndex > lastIndex){
            lastIndex = currentIndex;
        }
        return firstLastOccurrence_Rec(a,x,mid+1,high,currentIndex,lastIndex);
    }else if(x < a[mid]){
        return firstLastOccurrence_Rec(a,x,low,mid-1,currentIndex,lastIndex);
    }else{
        return firstLastOccurrence_Rec(a,x,mid+1,high,currentIndex,lastIndex);
    }
}