// longestWord function receive 1 argument 'sentence' the function return the longest 
// word in sentence , only letters will be counted (numbers and special signs will be ignored)

const longestWord = (sentence)=>{
    let arr = sentence.split(" ");
    let longest_word = 'a';
    let regex = /[a-z A-Z]/g;

    for(let word of arr){ 
        temp_word_arr = word.match(regex);
        temp_word = '';
        if(temp_word_arr)
            temp_word = temp_word_arr.join("");

        if (temp_word.length > longest_word.match(regex).join("").length){
            longest_word = word.match(regex).join("");
        }
    }

    return longest_word;
 }

 /*
 //another option:
    let arr = sentence.split(" ");
    let longest_word = 'a';
    let regex = /[a-z A-Z]/;

    let checkPureWord; 

    for(let word of arr){
        checkPureWord = '';
        for(let i = 0 ; i < word.length ; i++){
            if(regex.test(word[i]))
                //console.log(word[i]);
                checkPureWord += word[i]
        }
        if (checkPureWord.length > longest_word.length){
            longest_word = checkPureWord
        }        
    } 

    return longest_word;
  */