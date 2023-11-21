import "./CadastroAluno.css";
import React from "react";

function CadastroAluno() {
  return (
    <form className="alinhamento">
      <div className="card">
        <h5 className="card-header">GERENCIAR ALUNO</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <div className="col-3">
                <span>CÓD. ALUNO</span>
                <div class="input-group flex-nowrap">
                  <input
                    type="int"
                    class="form-control"
                    placeholder="Digite o código do aluno"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
                  &nbsp; &nbsp;
                  <i class="bi bi-search my-custom-icon"></i>
                </div>
              </div>

              <span>NOME</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite o nome do aluno"
                  aria-describedby="addon-wrapping"
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <span>CÓD. MATRÍCULA</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Digite o código da matrícula"
                  aria-describedby="addon-wrapping"
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
            <div className="col-3">
              <span>CÓD. TURMA</span>
              <div class="input-group flex-nowrap">
                <input
                  type="int"
                  class="form-control"
                  placeholder="Digite o código da Turma"
                  aria-describedby="addon-wrapping"
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <span>STATUS</span>
                <div class="input-group flex-nowrap">
                  <label>
                    <input type="radio" name="gender" value="other" />
                    ATIVO
                  </label>
                </div>
                <div>
                  <label>
                    <input type="radio" name="gender" value="other" />
                    INATIVO
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row aling-itens-botoes alinhamento">
          <div className="col-3">
            <button type="button" class="btn btn-success">
              <i class="bi bi-bag-plus"></i>&nbsp; CADASTRAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-primary">
              <i class="bi bi-pencil"></i>&nbsp; ATUALIZAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-danger">
              <i class="bi bi-trash"></i>&nbsp; EXCLUIR
            </button>
          </div>
          <div className="row">&nbsp;</div>
        </div>
      </div>
    </form>
  );
}

export default CadastroAluno;
