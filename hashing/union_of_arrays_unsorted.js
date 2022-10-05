let a = [15,20,5,15,30];         //--> m
let b = [15,15,15,20,10];     //--> n

console.log(findUnion(a,b));
//* TC = Theta(m+n)
//* AS = O(m+n)
function findUnion(a,b){
    const set = new Set([...a,...b]); //O(m+n)
    return set.size;
}