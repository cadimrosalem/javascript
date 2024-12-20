let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false 
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} addicionado`
        lista.appendChild (item)
        res.innerHTML = ''
    } else {
        alert ('Valor inválido ou ja encontrado na lista!')
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        alert('Adicione números antes de finalizar.')
    } else {
        let total = valores.length
        let somaTotal = valores.reduce((a, b) => a + b, 0)
        let maior = Math.max(...valores) // Maior número
        let menor = Math.min(...valores) // Menor número
        let media = 0
        media = somaTotal / total
        res.innerHTML = `
            <strong>Resultado Final:</strong><br>
            <p>Total de números cadastrados: ${total}</p>
            <p>Soma de todos os números: ${somaTotal}</p>
            <p>O maior valor é: ${maior}</p>
            <p>O menor valor é: ${menor}</p>
            A média dos valores digitados é: ${media}`
            
    }
}

function limpar() {
    valores = []
    lista.innerHTML = ''
    res.innerHTML = ''
    num.value = ''
    num.focus()
}






document.addEventListener('DOMContentLoaded' , () => {
    let inputField = document.getElementById('fnum');
    let addButton = document.querySelector('input[type="submit"]');

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão do formulário
            addButton.click(); // Simula o clique no botão
        }      
    });
});
