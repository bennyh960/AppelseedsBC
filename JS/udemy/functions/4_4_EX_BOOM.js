const isBoom = (num => {
    for(let i = 0; i < num ; i++){
        if( i.toString().includes('7') && i % 7 === 0){
            console.log('BOOM-BOOM');
        } else if (i % 7 === 0) {
            console.log('BOOM');
        } else{
            console.log(i);
        }
    }
})(21);

// console.log(isBoom);