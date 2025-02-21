document.addEventListener('DOMContentLoaded', function() {
    const input_peso = document.querySelector('#peso');
    const input_fase = document.querySelector('#fase');
    const output_total = document.querySelector('#resultado');
    const output_descricao = document.querySelector('#descricao');

    let comprimidos_por_dia = 0;
    let comprimidos_totais = 0;

    function calcular() {
        const peso = input_peso.value;
        const fase = input_fase.value;

        if (peso == "" || fase == "") {
            output_total.textContent = "";
            return;
        }

        if (peso > 70) {
            comprimidos_por_dia = 5;
        } else if (peso >= 50) {
            comprimidos_por_dia = 4;
        } else if (peso >= 36) {
            comprimidos_por_dia = 3;
        } else {
            comprimidos_por_dia = 2;
        }

        if (fase == "intensiva") {
            comprimidos_totais = comprimidos_por_dia * 60;
            output_descricao.innerHTML = `Fase intensiva: 2 meses <br> ${comprimidos_por_dia} comprimidos por dia <br><br> <strong>Composto de:</strong> <br> Rifampicina <br> Isoniazida <br> Pirazinamida <br> Etambutol`;
        } else {
            comprimidos_totais = comprimidos_por_dia * 120;
            output_descricao.innerHTML = `Fase intensiva: 4 meses <br> ${comprimidos_por_dia} comprimidos por dia <br><br> <strong>Composto de:</strong> <br> Rifampicina <br> Isoniazida`;
        }

        output_total.textContent = comprimidos_totais;
    }

    input_peso.addEventListener('input', calcular);
    input_fase.addEventListener('input', calcular);
});