import "./CadastroFuncionario.css";

function FormFuncionario() {
  return (
    <form className="alinhamento">
      <div class="card">
        <h5 class="card-header">DADOS FUNCIONÁRIO</h5>
        <div class="card-body ">
          <div className="row">
            <div className="col-2">
              <span>CÓD. FUNCIONÁRIO</span>
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
            <div className="col">
              <span>NOME</span>
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
            <div className="col-3">
              <span>RG</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  aria-label="Input 1"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>

            <div className="col-3">
              <span>CPF</span>
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="form-control"
                  placeholder="999.999.999-00"
                  aria-label="Input 2"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>

            <div className="col-3">
              <span>DATA NASCIMENTO</span>
              <div class="input-group flex-nowrap">
                <input
                  type="date"
                  class="form-control"
                  placeholder="dd/mm/aaaa"
                  aria-label="Input 2"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-9">
              <span>RUA</span>
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
              <span>NÚMERO</span>
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

          <div className="row">
            <div className="col-9">
              <span>E-MAIL</span>
              <div class="input-group flex-nowrap">
                <input
                  type="email"
                  class="form-control"
                  placeholder="example@example.com"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div className="col-3">
              <span>TELEFONE</span>
              <div class="input-group flex-nowrap">
                <input
                  type="email"
                  class="form-control"
                  placeholder="(99) 99999-9999"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div className="row">&nbsp;</div>

          <div className="card">
            <h5 class="card-header">DEPARTAMENTO</h5>
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <span>CÓD. SETOR</span>
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
                  <span>DESCRIÇÃO</span>
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
                  <span>DATA ADMISSÃO</span>
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
      </div>
    </form>
  );
}

export default FormFuncionario;
