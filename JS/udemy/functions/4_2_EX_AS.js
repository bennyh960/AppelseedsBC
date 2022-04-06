// Create a function that takes 1 argument, a number score.
// Returns either “A”, ”B”, “C”, “D”, “F”.
// score of:
// 0-64 is a “F”
// 65-69 is a “D”
// 70-79 is a “C”
// 80-89 is a “B”
// 90-100 is an “A


const gradAssigner = (grade) => {
    if (0 < grade  && grade <= 64 ) {
        return 'F';
    }
    else if ( 65 <= grade  && grade <= 69){
        return 'D';
    }
    else if ( 70 <= grade  && grade <= 79){
        return 'C';
    }
    else if ( 80 <= grade  && grade <= 89){
        return 'b';
    }
    else if ( 90 <= grade  && grade <= 100){
        return 'A';
    }
}

console.log(gradAssigner(99));