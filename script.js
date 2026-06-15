function calcularDesconto() {

    const precoInput = document.getElementById('preco').value;
    const descontoInput = document.getElementById('desconto').value;


    const preco = parseFloat(precoInput);
    const desconto = parseFloat(descontoInput);


    if ((preco) > 0) {
    }
    else {
        alert("Por favor, preencha ambos os campos com números válidos.");
        return;
    }

    if ((desconto) >= 0) {
    }
    else {
        alert("Por favor, preencha ambos os campos com números válidos.");
        return;
    }

    if ((desconto) <= 100) {
    }
    else {
        alert("Por favor, preencha ambos os campos com números válidos.");
        return;
    }

    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;

    
    alert("O valor final com " + descontoInput + "% de desconto é R$ " + precoFinal + " e valor de desconto é R$ " + valorDesconto.toFixed(2));
    
    console.log("Desconto %: " + descontoInput);
    console.log("Preço R$: " + precoInput);
    console.log("Valor desconto R$: " + valorDesconto);
}
