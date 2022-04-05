// getWorkedByNumber is a function that get an argument 'num', num is a number between
// 9-0 , The function should return the number in words. i.e if num = 3 will return "three".
// if the argument is out of range return "invalid".

const getWordByNumber = (num)=>{ 
    //Your Code Here :-)
        switch (num){
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three"
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            default:
                return 'invalid';
        }
    
    }