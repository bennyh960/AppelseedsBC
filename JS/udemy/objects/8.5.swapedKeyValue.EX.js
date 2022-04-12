let myobj = {
    key1 : 'value1',
    key2 : 'value2',
    key3 : 'value3'
}


function swapKV(obj){
    let tempObj = {};
    for(let k in obj){
        tempObj[obj[k]] = k;
    }

    // obj = tempObj >>>>>>>>>>> NOT WORKING
    // obj.someValue = tempObj.somevalue >>> will work 
    return tempObj;
}

myobj = swapKV(myobj)
console.log(myobj);


// console.log(Object.keys(myobj));

