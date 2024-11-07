window.addEventListener("DOMContentLoaded", () => {
  handleIdateInput();
});

function handleIdateInput() {
  const element = document.getElementById("idade");
  element.addEventListener("keypress", (evt) => {
    if (!/^\d+$/g.test(evt.key)) evt.preventDefault();
  });
}

function formatSalary(element) {
  let value = element.value.replace(/\D/g, "");
  value = (parseFloat(value) / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  element.value = value;
}

function calculate() {
  const age = parseFloat(document.getElementById("idade").value);
  const salaryText = document.getElementById("salario").value;
  const salary = parseFloat(salaryText.replace(/[^\d]/g, ""));

  if (!isNaN(age) && !isNaN(salary)) {
    const yearlySalary = (salary / 100) * 12;
    const result = (age * yearlySalary) / 10;

    const formattedResult = result.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    document.getElementById(
      "resultado"
    ).innerText = `Resultado: ${formattedResult}`;
  } else {
    document.getElementById("resultado").innerText =
      "Por favor, insira valores válidos.";
  }
}
