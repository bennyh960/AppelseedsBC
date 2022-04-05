function tellFortune(jobTitle, location, partnerName, numberOfChildren){
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`
}

let benny = tellFortune("proggramer","Ashkelon", "Shira" ,"6");
console.log(benny);