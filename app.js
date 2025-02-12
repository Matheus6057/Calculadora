// Função para adicionar valores ao display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para deletar o último caractere
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Função para calcular o resultado
function calculate() {
    let display = document.getElementById('display');
    try {
        // Usa a função eval para calcular a expressão no display
        display.value = eval(display.value);
    } catch (e) {
        // Em caso de erro (ex: divisão por zero), exibe "Erro"
        display.value = 'Erro';
    }
}