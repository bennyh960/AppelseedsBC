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
    let arr = [];

    for(let i = 0 ; i < N ; i++){
        arr.push(' ');
    }
    for(let i = 0 ; i < N ; i++){
        arr.unshift(symbole);
        arr.pop();
        console.log(arr.join(''));
    }
}
steps2(5);


