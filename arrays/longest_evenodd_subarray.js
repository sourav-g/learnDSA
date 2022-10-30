let a = [2,15,20];

const isEven = (num) => num % 2==0;

maxEvenOddKadanes(a);

//* TC => O(n^2)
//* SC => O(n^2) -> to print the longest odd even subarray
function maximumEvenOdd(a){
    const n = a.length;
    let maxoddEvenArray = [];
    let max_count = 0;
    for(let i=0; i<n; i++){
        let oddEvenArray = [];
        let count = 1;
        let startEven = isEven(a[i]);
        oddEvenArray.push(a[i]);
        for(let j=i+1; j<n; j++){
            if(startEven != isEven(a[j])){
                oddEvenArray.push(a[j]);
                count++;
                startEven = isEven(a[j]);
            }else{
                break;
            }
        }
        if(count > max_count){
            maxoddEvenArray = oddEvenArray;
            max_count=count;
        }    
    }
    console.log(max_count);
    console.log(maxoddEvenArray);
}

//*TC => O(n)
function maxEvenOddKadanes(a){
    const n = a.length;
    let max_count = 1;
    let count = 1;
    for(let i=1; i<n; i++){
        if(!isEven(a[i]+a[i-1])){ //! alternating even-odd condition
            count++;
        }else {
            count = 1;
        }    
        if(count > max_count)max_count=count;
    }
    console.log(max_count);
}
