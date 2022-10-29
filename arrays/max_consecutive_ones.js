let a = [1,1,1,0,0,1,0];

countOfMaxOnes1(a);

function countOfMaxOnes(a){
    const n = a.length;
    let max_count = count = 0;
    for(let i=0; i<n; i++){
        if(i==0 && a[i]==1){
            count++;
            continue;
        }
        else if((a[i]==1 && a[i]-a[i-1]==0) || a[i]-a[i-1]==1){
            count++;
        }
        else{
            if(count > max_count) max_count = count;
            count=0;
        }
    }
    if(count > max_count) max_count = count;
    console.log(max_count);
}

function countOfMaxOnes1(a){
    const n = a.length;
    let max_count = count = 0;
    for(let i=0; i<n; i++){
        if(a[i]==0){
            count=0;
        }else{
            count++;
            if(count>max_count) max_count=count;
        }
    }
    console.log(max_count);
}