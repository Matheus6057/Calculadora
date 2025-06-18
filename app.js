function iniciarCalculadora() {
  const form = document.getElementById('calcForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // impede o reload da página

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operacao = document.getElementById('operacao').value;
    const resultadoEl = document.getElementById('resultado');
    let resultado = 0;

    switch (operacao) {
      case 'soma':
        resultado = valor1 + valor2;
        break;
      case 'subtracao':
        resultado = valor1 - valor2;
        break;
      case 'multiplicacao':
        resultado = valor1 * valor2;
        break;
      case 'divisao':
        resultado = valor2 !== 0 ? (valor1 / valor2) : 'Erro (divisão por zero)';
        break;
      default:
        resultado = 'Operação inválida';
    }

    resultadoEl.textContent = resultado;
  });
}
