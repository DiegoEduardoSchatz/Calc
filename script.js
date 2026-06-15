function calcularDesconto() {
    // Captura os valores dos inputs
    const precoInput = document.getElementById('preco').value;
    const descontoInput = document.getElementById('desconto').value;

    // Converte para formato de número com ponto flutuante
    const preco = parseFloat(precoInput);
    const desconto = parseFloat(descontoInput);

    // Validação básica para garantir que são números válidos
    if (isNaN(preco) || isNaN(desconto)) {
        alert("Por favor, preencha ambos os campos com números válidos.");
        return;
    }

    // Cálculo do valor do desconto e do preço final
    const valorDesconto = preco * (desconto / 100);
    const precoFinal = preco - valorDesconto;

    // Exibe o resultado formatado em moeda brasileira (R$)
    /*document.getElementById('resultado').innerText = `Valor do Desconto: R$ ${valorDesconto.toFixed(2)} | Preço Final: R$ ${precoFinal.toFixed(2)}`;*/

        alert("O valor final com " + descontoInput + "% de desconto é R$ " + precoFinal.toFixed(2));
}
