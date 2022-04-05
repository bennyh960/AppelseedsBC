(function(){
    'use-strict'
    
    
    /* ####################################### README #############################################
    Free text (in hive) – a description of the program and how you chose
    to implement the diagnosis algorithm :
    
     I am not understanding what you mean "in hive " so in your permittion i describe my game logic here.
     
     1. At the begining i defined game variable which include the "wordsBank" and "randomnum" to generate the
     random "SecretWord". Then i include number of "turns" and create arrays for the original secret word "arrSecretWord"
     and "showWordArr" that display an asterisk for each letter.
    
     2. I built a function "EncodedDecoded" that take the secret word array and the user guess as arguments and return true/false if the user guess
     the correct letter. 
        The function 
            * Iterate with forEach loop on each letter on the Secret word array.
            * If guess (lower case or upper case) equal to letter , the same index of that letter in the 
                showWord  will be equal to original letter in secretword ( in order to save upper/lower case).
                also istruegess variable will change to "true".
            * In function changes in arrays will affect on the original array (known to me as pointer in C langunge).
    
    3. Game loop - The loop will stop if num of turns equal to zero or each letter in show word equal to each letter in secret word.
        # if the user will print invalid guess ( more than one char or char that is not a letter) The window will alert 
            an error massage. and the code will back to the begining of the loop (it will not affect on his turns).
    
        # i define "istrueguess" boolean variable which is call to the "EncodedDecoded" function. (explaind in section 2)
            and the number of turns changes according that function logic. 
        
    4. At the end of the game loop the console will declare a win/loos massage.
    
    
    */
    
    
    
    // figlet not working in my vs code - only in my cmder. Anyway i paste the function that should print the "welcome massage"
    /*
    var figlet = require('figlet');
    
    figlet('HANG MAN', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    */
    // Just in case my figlet function not working. i pasted from cmder the welcome massage
        var HANGMEN = [
        " _   _    _    _   _  ____   __  __    _    _   _",
        "| | | |  / \  | \ | |/ ___| |  \/  |  / \  | \ | |",
        "| |_| | / _ \ |  \| | |  _  | |\/| | / _ \ |  \| |",
        "|  _  |/ ___ \| |\  | |_| | | |  | |/ ___ \| |\  |",
        "|_| |_/_/   \_\_| \_|\____| |_|  |_/_/   \_\_| \_|"
    
    ]
        for(let line of HANGMEN)
            console.log(line);
    
    
    //Game Variable
    let wordBank = ["JavaScript","Bootcamp","appleseeds","Developer","Computer","Project","functions","Loops","Proggraming","Excellence","Happy"];
    var randomnum = Math.floor((Math.random() * wordBank.length)) ;
    var turns = 10;
    const SecretWord = wordBank[randomnum];
    const arrSecretWord = SecretWord.split("");
    var showWordArr = [];
    arrSecretWord.forEach((element)=>{
        showWordArr.push("*")
    
    });
    
    //++++ Game logic function  - check if guess is true , reutrn 
    function EncodedDecoded(secretWordArray,guess){
    
        var isTrueguess = false;
    
        secretWordArray.forEach((letter,index) => {
            if(guess.toLowerCase() == letter || guess.toUpperCase() == letter){
                showWordArr[index] = letter; 
                isTrueguess = true;
            }
        })
        return isTrueguess;
    }
    
    // Game loop
    while(turns > 0 && showWordArr.join("") != SecretWord){
    
        console.log("Guess the secred word: " + showWordArr.join(""))
    
        var guess = prompt("Guess a letter: \nYou have #" + turns + (turns > 1 ? " guesses.": " last guess."));
         
        if(!(guess.length === 1 && /[a-z]/i.test(guess))){
            alert("Invalid guess: Please guess only one letter.")
            continue
        }
        
        isTrueguess = EncodedDecoded(arrSecretWord,guess);
    
        if(!isTrueguess)    
            turns--;
    }
    
    //+++++++++++++++++++ Declare win/loose ++++++++++++++++++++++++++
    if(turns == 0){
        console.log("==========\nGame-Over\n==========\n");
        console.log('The secret word is "' + SecretWord + '".' );
    }
    
    if(showWordArr.join("") == SecretWord){
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log('Amazing! you discovered the secret word "' + SecretWord + '".');
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }
    
    })();
    
    