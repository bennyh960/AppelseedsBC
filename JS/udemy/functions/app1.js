function isValidPassword(username, password){
    if(password.length < 8 ){
        console.log(0);
        return false;
    }
    if(password.indexOf(' ') !== -1){
        console.log(1);
        return false;
    }
    
    if(password.indexOf(username) !== -1){
        console.log(3);
        return false;
    }
    return true;
}

console.log(isValidPassword("benny12345","benny123456"));
// console.log("benny12345".indexOf("benny1234") !== -1);