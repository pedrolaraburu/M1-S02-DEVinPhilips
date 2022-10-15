function estacaoAtual(){
    var d = new Date();
    var dateDia = Number(d.getDate())
    var dateMes = Number(d.getMonth() + 1)
    
    // var dateDia= 5;
    // var dateMes = 3;

    if ((dateDia >= 22 && dateMes == 9) || dateMes == 10 || dateMes == 11 || (dateDia <= 21 && dateMes == 12)){
        alert("A estação é: Primavera");
    } else if((dateDia >= 22 && dateMes == 12)|| dateMes == 1 || dateMes == 2 || (dateDia <= 21 && dateMes == 3)){
        alert("A estação é: Verão")
    } else if((dateDia >= 22 && dateMes == 3) || dateMes == 4 || dateMes == 5 || (dateDia <= 21 && dateMes == 6)){
        alert("A estação é: Outono")
    } else if((dateDia >= 22 && dateMes == 6) || dateMes == 7 || dateMes == 8 || (dateDia <= 21 && dateMes == 9)){
        alert("A estação é: Inverno")
    } 

}

estacaoAtual()