
document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const prevBtn = document.getElementById("prevStep");
    const nextBtn = document.getElementById("nextStep");
    let currentStep = 0;

    function showStep(index) {
        steps.forEach((el, i) => el.style.display = i === index ? "block" : "none");
        prevBtn.style.display = index === 0 ? "none" : "inline-block";
        nextBtn.innerText = index === steps.length - 1 ? "Finalizar" : "Próximo";
    }

    if (steps.length) {
        showStep(currentStep);

        nextBtn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });

        prevBtn.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    }
});

function mostrarSecao(secaoId) {
    document.getElementById('consultas').style.display = 'none';
    document.getElementById('exames').style.display = 'none';
    document.getElementById(secaoId).style.display = 'block';
}


document.querySelectorAll('.button-group .button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.button-group .button').forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

function confirmarConsulta() {
    const data = document.getElementById('data-consulta').value;
    const especialidade = document.getElementById('especialidade').value;
    const unidade = document.getElementById('unidade').value;
    const horario = document.getElementById('horario-consulta').value;

    if (!data || !especialidade || !unidade || !horario) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const hoje = new Date();
    const dataSelecionada = new Date(data + 'T00:00:00');
    if (dataSelecionada < hoje.setHours(0,0,0,0)) {
        alert("A data selecionada já passou. Por favor, escolha uma data futura.");
        return;
    }

    const hora = parseInt(horario.split(":")[0]);
    if (hora < 7 || hora >= 18) {
        alert("O horário deve ser entre 07:00 e 18:00.");
        return;
    }

    const novaConsulta = {
        data,
        horario,
        especialidade,
        unidade,
        id: Date.now()
    };

    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    consultas.push(novaConsulta);
    localStorage.setItem("consultas", JSON.stringify(consultas));

    const texto = `Consulta marcada para ${data}, às ${horario}, de ${especialidade}, na unidade ${unidade}.`;
    document.getElementById('texto-confirmacao').innerText = texto;

    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagem-confirmacao').style.display = 'block';
}


function cancelarConsulta() {
    document.getElementById('data-consulta').value = '';
    document.getElementById('especialidade').value = '';
    document.getElementById('unidade').value = '';
    document.getElementById('horario-consulta').value = '';
    window.location.href = "../index.html";
}

function voltarFormulario() {
    document.getElementById('mensagem-confirmacao').style.display = 'none';
    document.getElementById('formulario').style.display = 'block';
    cancelarConsulta();
}


function verificarConsultasProximas() {
    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    const agora = new Date();

    const proximas = consultas.filter(c => {
        const dataHoraConsulta = new Date(`${c.data}T${c.horario}`);
        const diffMin = (dataHoraConsulta - agora) / 60000;
        return diffMin > 0 && diffMin <= 60; // próximas 60 minutos
    });

    if (proximas.length > 0) {
      const mensagem = proximas.map(c =>
          `Lembrete: Consulta de ${c.especialidade} às ${c.horario}, na ${c.unidade}.`
      ).join('\n');

      document.getElementById('texto-notificacao').innerText = mensagem;
      document.getElementById('notificacao-consulta').style.display = 'block';
  }
}

function fecharNotificacao() {
    document.getElementById('notificacao-consulta').style.display = 'none';
}

// Espera 10 segundos após o carregamento da página
setTimeout(verificarConsultasProximas, 10000);
