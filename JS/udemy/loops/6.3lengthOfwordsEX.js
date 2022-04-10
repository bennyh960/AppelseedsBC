function lengthOfwords(arr){
    let lengthArr = []
    arr.forEach(word => {
        lengthArr.push(word.length);
    });
    return lengthArr;
}

console.log(lengthOfwords(["boo", "doooo", "hoo","ro"] ));