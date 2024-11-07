window.addEventListener('DOMContentLoaded', ()=>{
    handleIdateInput();
});

function handleIdateInput(){
    const element = document.getElementById("idade");
    element.addEventListener('keypress', (evt) => {
        if(!/^\d+$/g.test(evt.key))
            evt.preventDefault();
    });
}

function formatarSalario(element) {
    let valor = element.value.replace(/\D/g, "");
    valor = (parseFloat(valor) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    element.value = valor;
}

function calcular() {
    const idade = parseFloat(document.getElementById("idade").value);
    const salarioText = document.getElementById("salario").value;
    const salario = parseFloat(salarioText.replace(/[^\d]/g, ''));

    if (!isNaN(idade) && !isNaN(salario)) {
        const salarioReais = (salario / 100)*12;
        const resultado = (idade * salarioReais) / 10;
        const resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("resultado").innerText = `Resultado: ${resultadoFormatado}`;
    } else {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
    }
}