// John and Mike both play basketball in different teams. In the latest 3 games,
// John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94
// and 123 points.
// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the
// winner to the console. Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into
// account there might be a draw (the same average score)

// i dont want use loop and arr due to we didnt learn them yet
const calcAvg = (s1,s2,s3) => Math.round((s1+s2+s3)/3);

let JhonTeamAvg = calcAvg(189,120,103);
let MikeTeamAvg = calcAvg(189,120,103);

if (JhonTeamAvg > MikeTeamAvg){
    console.log(`Jhon's team win with average score of ${JhonTeamAvg}`);
}else if (MikeTeamAvg > JhonTeamAvg) {
    console.log(`Mike's team win with average score of ${MikeTeamAvg}`);
} else{
    console.log("Its a draw!!! ")
}
