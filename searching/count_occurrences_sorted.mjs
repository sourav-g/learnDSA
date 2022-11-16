//? let a = [10,10,10,10,10]   
//* Search 10 
//* TC => O(log n + K)
//* O(log n) for finding one occurrence
//* O(K) for number of times element is present (K=5) 

//? let a = [10,20,20,20,30,30]
//* Search 20 
//* TC => O(log n + K) ; K=3

//?-----------------------------------------------------------------
//* So as K -> n , TC -> O(n), if binary search applied directly
//* for finding all the elements
//?-----------------------------------------------------------------

import { findFirstOccurrence } from './index_first_occurrence_sorted.mjs';
import { findLastOccurrence } from './index_last_occurrence_sorted.mjs'; 

let a = [10,20,20,20,30,30];
let number = 20;


//* TC => O(log n) + O(log n) = O(log n)
function countOccurences(a,number){
    let lastNumIndex;
    let firstNumIndex = findFirstOccurrence(a,number);
    if(firstNumIndex == -1){
        return 0;
    }else{
        lastNumIndex = findLastOccurrence(a,number);
    }
    return (lastNumIndex-firstNumIndex)+1;
}

console.log('Count --> ',countOccurences(a,number));