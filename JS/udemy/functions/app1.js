function isValidPassword(username, password){
    if(password.length < 8 ){
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }

    if(password.indexOf(username))
}