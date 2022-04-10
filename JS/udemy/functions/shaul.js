function toCamelCase(str){

    if (str == '' || str == ' ' ){
        return "An empty string was provided but not returned"
    }

    let arr = str.split(' ');
    for(let i = 1; i < arr.length ; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,arr[i].length);
    }
    return arr.join("");
}

console.log(toCamelCase('benny hassan hello world'));
console.log(toCamelCase('benny_hassan_hello_world'));
console.log(toCamelCase(' '));

