
const steps = N => {
    let symbole = '#';
    let arr = [];
    for(let i = 0 ; i < N ; i++){
        arr.push(symbole);
        console.log(arr.join(""));
    }
    
}

// steps(5);

// const steps2 = N => {
//     let symbole;
//     let space = [];
//     let arr = [];
//     for(let i = N - 1 ; i > 0 ; i--){
//         space.push(" ");
//     }
//     console.log(space);
//     for(let i = 0 ; i < N ; i++){
//         symbole = 'x' + space.join("");
//         arr.push(symbole);
//         space.pop();
//     }

//     for(let k = 1 ; k < arr.length ; k++){
//         console.log(arr);
//     }

// }

// steps2(5);