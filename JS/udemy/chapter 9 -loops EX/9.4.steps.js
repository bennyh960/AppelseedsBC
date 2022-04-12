// with repeat (i have 2 ninja methode)
const steps3 = N => {
    for(let i = 1; i < N ; i++){
        console.log(`"${'#'.repeat(i) + ' '.repeat(N-i)}"`);
    }
}

steps3(5); // work well 


// without space -> not good for task
const steps = N => {
    let symbole = '#';
    let arr = [];
    for(let i = 0 ; i < N ; i++){
        arr.push(symbole);
        console.log(arr.join(""));
    }
    
}

// Ninja way O(n^2)
const step4 = N => {
    for(let i = 0 ; i < N ; i++){
        let str = '';
        for(let j = 0; j < N ; j++){
            if(i >= j){
                str += '#';
            } else {
                str += ' ';
            }

        }
        console.log(`"${str}"`);
    }
}

step4(5);

// SUPER NINJA , O(2n) with spaces and not repeated
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



