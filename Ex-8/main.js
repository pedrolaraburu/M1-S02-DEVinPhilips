function numerosPrimos(){
    let qtdPrimos = 0;
    for(let i = 2; i <= 1000; i++){
        var primo = true;
        for(let n = 2; n < i; n++){
            if(i % n == 0){
                primo = false;
            } 
        }
        if(primo) {
            qtdPrimos++;
            console.log(i)
        }
    }
    console.log(`De 2 a 1000 existem ${qtdPrimos} números primos.`)
}

numerosPrimos()