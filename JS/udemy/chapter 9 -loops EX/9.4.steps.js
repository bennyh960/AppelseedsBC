const steps = N => {
    let symbole = '#';
    let arr = [];
    for(let i = 0 ; i < N ; i++){
        arr.push(symbole);
        console.log(arr.join(""));
    }
    
}

// steps(5);

const steps2 = N => {
    let symbole = '#';

    let outerArr = [];
    let innerArr = [];

    for(let i = 0 ; i < N  ; i++){
        innerArr = [];
        for(let j = 0 ; j <= i ; j++){
            innerArr.push(symbole);
            for(let k = N ; k > 0 ; k--){
                innerArr.push(' ');
            }
        }
        outerArr.push(innerArr)
        console.log(outerArr[i].join(" "));
    }
}
steps2(3);
