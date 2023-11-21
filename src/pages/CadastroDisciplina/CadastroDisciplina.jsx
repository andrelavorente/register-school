import "./CadastroDisciplina.css";
import { useState } from "react";

function CadastroDisciplina() {
  const [nome, setNome] = useState("");
  const [codnome, setCodnome] = useState("");
  const [professor, setProfessor] = useState("");
  const [carga, setCarga] = useState("");
  const [codturma, setTurma] = useState("");

  let valida_nome = function valida_nome(id) {
    let regex = /^\D{3,20}$/;
    let elemento = document.getElementById(`${id}`);

    if (regex.test(nome)) {
      elemento.style.border = "1px solid green";
    } else {
      elemento.style.border = "1px solid red";
    }
  };

  let valida_codDis = function valida_codDis(id) {
    let regex = /^\D{0,5}\d{0,5}\D{0,5}$/;
    let elemento = document.getElementById(`${id}`);

    if (regex.test(codnome)) {
      elemento.style.border = "1px solid green";
      if (elemento.classList.contains("erro")) {
        elemento.classList.remove("erro");
      }
    } else {
      elemento.style.border = "1px solid red";
      elemento.classList.add("erro");
    }
  };
  let valida_prof = function valida_nome(id) {
    let regex = /^\D{3,20}$/;
    let elemento = document.getElementById(`${id}`);

    if (regex.test(professor)) {
      elemento.style.border = "1px solid green";
    } else {
      elemento.style.border = "1px solid red";
    }
  };

  let valida_carga = function valida_carga(id) {
    let regex = /^\d{1,3}$/;
    let elemento = document.getElementById(`${id}`);

    if (regex.test(carga)) {
      elemento.style.border = "1px solid green";
      if (elemento.classList.contains("erro")) {
        elemento.classList.remove("erro");
      }
    } else {
      elemento.style.border = "1px solid red";
      elemento.classList.add("erro");
    }
  };

  let valida_codTur = function valida_codTur(id) {
    let regex = /^\D{0,5}\d{0,5}\D{0,5}$/;
    let elemento = document.getElementById(`${id}`);

    if (regex.test(codturma)) {
      elemento.style.border = "1px solid green";
      if (elemento.classList.contains("erro")) {
        elemento.classList.remove("erro");
      }
    } else {
      elemento.style.border = "1px solid red";
      elemento.classList.add("erro");
    }
  };

  const validaNome = (e) => {
    setNome(e.target.value);
    valida_nome(e.target.id);
  };

  const valida_codDisciplina = (e) => {
    setCodnome(e.target.value);
    valida_codDis(e.target.id);
  };

  const validaProf = (e) => {
    setProfessor(e.target.value);
    valida_prof(e.target.id);
  };

  const validaCarga = (e) => {
    setCarga(e.target.value);
    valida_carga(e.target.id);
  };

  const valida_codTurma = (e) => {
    setTurma(e.target.value);
    valida_codTur(e.target.id);
  };

  let erro = document.querySelectorAll(".erro");

  erro.forEach((item) => {
    item.value = "";
  });

  return (
    <form className="alinhamento">
      <div className="card">
        <h5 className="card-header">GERENCIAR DISCIPLINA</h5>
        <div className="card-body">
          <div className="row  mt-3">
            <div className="col-6">
              <label htmlFor="nome_disciplina">NOME DA DISCIPLINA</label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Português"
                  id="nome_disciplina"
                  onChange={validaNome}
                  required
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
            <div className="col-6">
              <label htmlFor="cod">CÓD. DA DISCIPLINA</label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Port_01"
                  id="cod"
                  onChange={valida_codDisciplina}
                  required
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
          </div>

          <div className="row mt-3" id="div_Dis">
            <div className="col-6">
              <label htmlFor="cod">PROFESSOR RESPONSÁVEL</label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: Pedro"
                  id="professor"
                  onChange={validaProf}
                  required
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>

            <div className="col-6">
              <label htmlFor="carga">CARGA HORÁRIA (EM HORAS)</label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: 150"
                  id="carga"
                  onChange={validaCarga}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-3" id="div_Dis">
            <div className="col-6">
              <label htmlFor="cod">PERÍODO</label>
              <div className="input-group flex-nowrap">
                <select name="periodo" id="periodo" required>
                  <option value=""></option>
                  <option value="MANHÃ">MANHÃ</option>
                  <option value="TARDE">TARDE</option>
                  <option value="NOITE">NOITE</option>
                </select>
              </div>
            </div>

            <div className="col-6">
              <label htmlFor="carga">CÓD. TURMA</label>
              <div className="input-group flex-nowrap">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex: M-6A"
                  id="codTurma"
                  onChange={valida_codTurma}
                  required
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
          </div>
          <div className="row  mt-5">
            <div id="observacao">
              <label htmlFor="obs" class="obs">
                OBSERVAÇÕES GERAIS
              </label>
              <div className="input-group flex-nowrap">
                <textarea name="obs" id="obs" cols="70" rows="4"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="row aling-itens-botoes centraliza">
          <div className="col-3">
            <button type="submit" class="btn btn-success">
              <i class="bi bi-bag-plus"></i> &nbsp; CADASTRAR
            </button>
          </div>
          <div className="col-3">
            <button type="submit" class="btn btn-primary">
              <i class="bi bi-pencil"></i>&nbsp; ATUALIZAR
            </button>
          </div>
          <div className="col-3">
            <button type="submit" class="btn btn-danger">
              <i class="bi bi-trash"></i>&nbsp; EXCLUIR
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CadastroDisciplina;
