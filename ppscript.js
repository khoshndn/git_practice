

const time = (numGenerator) =>{
numGenerator = Math.floor(Math.random()*12);
const num = numGenerator;
if(num <= 3){
    console.log("You will meet someone with an Air sign Tomorrow!");
}
if(num <= 6 && num > 3 ){
    console.log("You will meet someone with a Fire sign Tomorrow!");
}
if(num <= 9 && num > 6){
    console.log("You will meet someone with a Water sign Tomorrow!");
}
if(num <= 12 && num > 9){
    console.log("You will meet someone with an Earth sign Tomorrow!");
}
}

const info = {
    time: [12, 3, 6, 9],
    place: ['Bus', 'Subway', 'Gym', 'School']
};

const infob = [];

const genRanNum = (numgen) => {
return Math.floor(Math.random() * numgen);

}
for(let i in info){
    let index = genRanNum(info[i].length);
    switch(i){
        case 'time':
            infob.push(`You will meet them at ${info[i][index]} pm.`);
            break;
        case 'place':
            infob.push(`You will greet them in the ${info[i][index]}. \n Enjoy!`);
            break;
            default:
                infob.push('There is no info');
    }
}




time();
console.log(infob.join('\n'));
