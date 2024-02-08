const nome =  "xiruzeira"; // nome do heroi
let xpInicial = 1.000; // xp que o heroi inicia


let almentaXp = 0

function comeuPalmito(qnt){ // calcula quantos palmitos o heroi comeu e cada um aumenta 1.000 de xp 
    while(almentaXp < qnt){
        almentaXp++
       }
       
}

comeuPalmito(9) //chama a funçao passando por paramentro a qunatidade de palmito que o heroi comeu
let xpHeroi = (xpInicial + almentaXp).toFixed(3) // recebe o xp do heroi formatado

if(xpHeroi <= 1.000){
    console.log(`O Herói de nome **${nome}** está no nível de **FERRO** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi > 1.000 && xpHeroi <= 2.000){
    console.log(`O Herói de nome **${nome}** está no nível de **BRONZE** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi > 2.000 && xpHeroi <= 5.000){
    console.log(`O Herói de nome **${nome}** está no nível de **PRATA** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi >5.000 && xpHeroi <=7.000){
    console.log(`O Herói de nome **${nome}** está no nível de **OURO** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi >7.000 && xpHeroi <=8.000){
    console.log(`O Herói de nome **${nome}** está no nível de **PLATINA** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi >8.000 && xpHeroi <=9.000){
    console.log(`O Herói de nome **${nome}** está no nível de **ASCENDENTE** e seu XP é: **${xpHeroi}**`);
}else if(xpHeroi >9.000 && xpHeroi <=10.000){
    console.log(`O Herói de nome **${nome}** está no nível de **IMORTAL** e seu XP é: **${xpHeroi}**`);
}else{
    console.log(`O Herói de nome **${nome}** está no nível de **RADIANTE** e seu XP é: **${xpHeroi}**`);
}

