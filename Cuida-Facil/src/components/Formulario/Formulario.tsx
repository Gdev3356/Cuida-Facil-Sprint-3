
export function FormularioConsulta() {
  return (
        <><div className="container" id="formulario">
          <h2 className="form-title">Marcar Consulta</h2>
          <input type="date" id="data-consulta" className="input-field" />
          <select id="especialidade" className="input-field">
              <option value="">Selecione uma especialidade</option>
              <option value="Cardiologia">Cardiologia</option>
              <option value="Ortopedia">Ortopedia</option>
              <option value="Pediatria">Pediatria</option>
          </select>

          <select id="unidade" className="input-field">
              <option value="">Selecione uma unidade</option>
              <option value="HC Central">HC Central</option>
              <option value="HC Pinheiros">HC Pinheiros</option>
              <option value="IMREA Vila Mariana">IMREA Vila Mariana</option>
          </select>

          <input type="time" id="horario-consulta" className="input-field" />

          <div className="buttons">
              <button onClick={() => cancelarConsulta()}>Cancelar</button>
              <button onClick={() => confirmarConsulta()}>Confirmar</button>
          </div>
      </div><div className="container" id="mensagem-confirmacao">
              <h2 className="form-title">Consulta Marcada</h2>
              <p id="texto-confirmacao"></p>
              <div className="buttons">
                  <button onClick={() => voltarFormulario()}>Confirmar</button>
              </div>
          </div></>
  );
}
 

const cancelarConsulta = () => {
  console.log('Consulta cancelada');
  // Lógica para resetar o formulário ou mudar o estado
};
 
const confirmarConsulta = () => {
  console.log('Consulta confirmada');
  // Lógica para processar dados e mudar o estado para mostrar a confirmação
};
 
const voltarFormulario = () => {
  console.log('Voltando ao formulário');
  // Lógica para ocultar a confirmação e mostrar o formulário
};
