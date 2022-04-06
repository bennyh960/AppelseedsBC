// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105
// points. Like before, log the average winner to the console.
// 5. Like before, change the scores to generate different winners, keeping in
// mind there might be draws.
// i dont want use loop and arr due to we didnt learn them yet
const calcAvg = (s1,s2,s3) => Math.round((s1+s2+s3)/3);

let JhonTeamAvg = calcAvg(189,120,103);
let MikeTeamAvg = calcAvg(189,120,103);

// part 1
if (JhonTeamAvg > MikeTeamAvg){
    console.log(`Jhon's team win with average score of ${JhonTeamAvg}`);
}else if (MikeTeamAvg > JhonTeamAvg) {
    console.log(`Mike's team win with average score of ${MikeTeamAvg}`);
} else{
    console.log("Its a draw!!! ")
}
console.log("=========EXTRA===========");
// part with EXTRA
let MaryTeamAvg2 = calcAvg(10,10,10);
let JhonTeamAvg2 = calcAvg(1010,10);
let MikeTeamAvg2 = calcAvg(10,10,10);

if (JhonTeamAvg2 > MikeTeamAvg2 && JhonTeamAvg2 > MaryTeamAvg2 ){
    console.log(`Jhon's team win with average score of ${JhonTeamAvg2}`);
}else if (MikeTeamAvg2 > JhonTeamAvg2 && MikeTeamAvg2 > MaryTeamAvg2) {
    console.log(`Mike's team win with average score of ${MikeTeamAvg2}`);
}else if (MaryTeamAvg2 > JhonTeamAvg2 && MaryTeamAvg2 > MikeTeamAvg2) {
    console.log(`Mary's team win with average score of ${MaryTeamAvg2}`);
} else{
    console.log("Its a draw!!! ")
}

