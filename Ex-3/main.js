function tabuada(){
    const num = parseInt(prompt("Digite um número"));
    for(let i = 1; i < 11; i++){
        const prod = num*i;
        alert(`${num}x${i} = ${prod}`);
    }
}

tabuada()