function somador(){
    let ver = true;
    let add = 0;
    while(ver){
        const num = parseInt(prompt("Digite um número"));
        if (num == -1){
            console.log(add);
            alert(`A soma dos números é ${add}`);
            ver = false;
        } else {
            add += num;
            continue;
        }
    } 
}

somador()