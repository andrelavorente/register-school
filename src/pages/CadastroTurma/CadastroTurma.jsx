import "./CadastroTurma.css";

function CadastroTurma() {
  return (
    <form className="alinhamento">
      <div class="card">
        <h5 class="card-header">GERENCIAR TURMA</h5>
        <div class="card-body ">
          <div className="row">
            <div className="col-2">
              <span>CÓD. TURMA</span>
              <div class="input-group flex-nowrap">
                <input
                  type="email"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <span>NOME DA TURMA</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <span>ANO DA TURMA</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>

            <div className="col-3">
              <span>NÚMERO DE ALUNOS</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="99999"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div className="row">&nbsp;</div>

          <div className="card">
            <h5 class="card-header">MATÉRIA</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <span>CÓD. MATÉRIA</span>
                  <div class="input-group flex-nowrap">
                    <input
                      type="email"
                      class="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                    &nbsp; &nbsp;
                    <i class="bi bi-search my-custom-icon"></i>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <span>DESCRIÇÃO DA MATÉRIA</span>
                  <div class="input-group flex-nowrap">
                    <input
                      type="email"
                      class="form-control"
                      placeholder=""
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
                <div className="col-3">
                  <span>INÍCIO DE ATIVIDADES</span>
                  <div class="input-group flex-nowrap">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="example@example.com"
                      aria-label="Username"
                      aria-describedby="addon-wrapping"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row aling-itens-botoes">
          <div className="col-3">
            <button type="button" class="btn btn-success">
              <i class="bi bi-bag-plus"></i> &nbsp; CADASTRAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-info">
              {" "}
              <i class="bi bi-pencil"></i>&nbsp; EDITAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-danger">
              {" "}
              <i class="bi bi-trash"></i>&nbsp; EXCLUIR
            </button>
          </div>
        </div>
        <div className="row"> 
              &nbsp;
        </div>
      </div>
    </form>
  );
}

export default CadastroTurma;
