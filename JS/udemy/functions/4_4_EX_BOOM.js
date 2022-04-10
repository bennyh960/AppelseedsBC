const isBoom = (num => {
    let oneLine = '1';
    let lineLengh = 30;
    for(let i = 2; i < num ; i++){
        lineLengh--;
        if( i.toString().includes('7') && i % 7 === 0){
            // oneLine += " ,BOOM-BOOM";
            oneLine = oneLine.concat(' ,BOOM-BOOM')
        } else if (i % 7 === 0) {
            // oneLine += ",BOOM";
            oneLine = oneLine.concat(' ,BOOM')
        } else{
            oneLine.concat(i,);
            oneLine += " ," + i;
        }
        if(lineLengh === 0 ){
            oneLine += '\n';
            lineLengh = 30;
        }

    }
    console.log(oneLine);
    return oneLine;
})(78);

