// capitalize function receive 1 argument 'word' the function return word that capitalize all
// vowl letters (a,e,i,o,u,y)

const capitalize = (word)=>{ 
    let newWord = ''
    for(let i of word){
        if( i == 'a' || i == 'i' || i == 'e' || i== 'o' || i == 'u' || i == 'y')
            i = i.toUpperCase()
        newWord += i;
    }
    return newWord;
}