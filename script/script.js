const botao = document.querySelector('.transacao__button');

botao.addEventListener('click', function(event){
    event.preventDefault();

    const tabela = document.querySelector('.extrato__table');
    const inputNome = document.getElementById('transacaoInputName');
    const inputValor = document.getElementById('transacaoInputMoney');
    const inputData = document.getElementById('transacaoInputDate');

    const linha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    const colunaNomeTexto = document.createTextNode(inputNome.value)
    colunaNome.appendChild(colunaNomeTexto);


    const colunaValor = document.createElement('td');
    const colunaValorTexto = document.createTextNode(`R$ ${inputValor.value}`)
    colunaValor.appendChild(colunaValorTexto);

    const colunaData = document.createElement('td');
    const colunaDataTexto = document.createTextNode(inputData.value)
    colunaData.appendChild(colunaDataTexto);


    linha.appendChild(colunaData);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);

    tabela.appendChild(linha);

})