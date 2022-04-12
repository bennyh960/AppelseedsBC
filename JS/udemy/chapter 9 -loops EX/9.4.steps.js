// without space
const steps = N => {
    let symbole = '#';
    let arr = [];
    for(let i = 0 ; i < N ; i++){
        arr.push(symbole);
        console.log(arr.join(""));
    }
    
}

// with spaces and not repeated
const steps2 = N => {
    let symbole = '#';
    let arr = [];

    for(let i = 0 ; i < N ; i++){
        arr.push(' ');
    }
    for(let i = 0 ; i < N ; i++){
        arr.unshift(symbole);
        arr.pop();
        console.log(`"${arr.join('')}"`);
    }
}
steps2(5);


// with repeat 
const steps3 = N => {
    for(let i = 1; i < N ; i++){
        console.log(`"${'#'.repeat(i) + ' '.repeat(N-i)}"`);
    }
}

steps3(5);


// another ninja way
// step4(5) = N => {}