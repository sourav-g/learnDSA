
*//console.log(findSquareRoot(121));

//*TC => O(sqrt(n))
function findSquareRoot(number){
    for(let i=1; i<=number; i++){
        if(i*i > number){
            return i-1;
        }
        if(i*i == number){
            return i;
        }
    }
}

console.log(findSquareRootRecur(16));

//*TC=SC => O(sqrt(n))   ???
function findSquareRootRecur(number,i){
    if(i==undefined) i=1;
    if(i*i == number){
        return i;
    }else if(i*i > number){
        return i-1;
    }else{
        return findSquareRootRecur(number,++i);
    }
}

console.log(findSquareRootRecur(16));

function findSquareRootBinarySearch(number){

}