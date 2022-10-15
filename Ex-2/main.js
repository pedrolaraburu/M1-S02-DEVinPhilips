function classificaIdade() {
    var idade = parseInt(prompt("Digite sua idade"));
    if (idade <= 0){
        alert("Idade inválida");
        classificaIdade()
    } else if(idade <= 15){
        alert("Você é Jovem");
    } else if (idade > 0 || idade > 15 && idade <= 16 || idade < 64){
        alert("Você é Adulto");
    } else if (idade >= 65) {
        alert("Você é Idoso");
    }
}


classificaIdade()