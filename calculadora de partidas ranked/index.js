/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/

let qntVitoria = 15;
let qntDerrota = 3


function levelUser(qntVitoria){
    if(qntVitoria <= 10){
        level = "Ferro";
        return level;
    }else if(qntVitoria > 10 && qntVitoria <= 20){
        level = "Bronze";
        return level;
    }else if(qntVitoria > 20 && qntVitoria <= 50){
        level = "Prata";
        return level;
    }else if(qntVitoria > 50 && qntVitoria <= 80){
        level = "Ouro";
        return level;
    }else if(qntVitoria > 80 && qntVitoria <= 90){
        level = "Diamante";
        return level;
    
    }else if(qntVitoria > 90 && qntVitoria <= 100){
        level = "Lendário";
        return level;
    }else{
        level = "Imortal";
        return level
    }

    
    
    
}


function saldoDeVitorias(qntVitoria, qntDerrota) {
    let saldoVitoria = qntVitoria - qntDerrota;
    levelUser(qntVitoria)
    return (`O Herói tem de saldo de: ${saldoVitoria} vitorias e o seu nivel é: ${level}`);
    
    

}


console.log(saldoDeVitorias(qntVitoria, qntDerrota));

