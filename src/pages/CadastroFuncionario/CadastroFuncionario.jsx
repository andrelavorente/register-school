import "./CadastroFuncionario.css";

function validarObrigatoriedadeDosCampos(){
    
  let erros = "";

   if(document.getElementById("nome").value === ""){
      erros += "O NOME DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }

   if(document.getElementById("rg").value === ""){
    erros += "O RG DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   
   if(document.getElementById("cpf").value === ""){
    erros += "O CPF DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
  
   if(document.getElementById("data_nasc").value === ""){
    erros += "A DATA DE NASCIMENTO DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   if(document.getElementById("rua").value === ""){
    erros += "A RUA DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   if(document.getElementById("numero").value === ""){
    erros += "O NÚMERO DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }

   if(document.getElementById("email").value === ""){
    erros += "O E-MAIL DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }

   if(document.getElementById("descricao").value === ""){
    erros += "A DESCRIÇÃO DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   if(document.getElementById("data_admissao").value === ""){
    erros += "A DATA DE ADMISSÃO É OBRIGATÓRIO \n";
   }

   if(erros.length > 0){
     alert(erros);
   }
}

function FormFuncionario() {
  return (
    <form className="alinhamento">
      <div class="card">
        <h5 class="card-header">GERENCIAR FUNCIONÁRIO</h5>
        <div class="card-body ">
          <div className="row">
            <div className="col-2">
              <span>CÓD. FUNCIONÁRIO </span> 
              <div class="input-group flex-nowrap">
                <input
                  type="number"
                  class="form-control"
                  placeholder=""
                />
                &nbsp; &nbsp;
                <i class="bi bi-search my-custom-icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span>NOME <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="nome"
                  id="nome"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <span>RG <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="rg"
                  id="rg"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-2">
              <span>CPF <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="cpf"
                  id="cpf"
                  type="number"
                  class="form-control"
                  placeholder="999.999.999-00"
                  required
                />
              </div>
            </div>
            <div className="col-2">
              <span>DATA NASCIMENTO <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="data_nasc"
                  id="data_nasc"
                  type="date"
                  class="form-control"
                  placeholder="dd/mm/aaaa"
                  required
                />
              </div>
            </div>
            <div className="col-4">
              <span>SEXO <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="sexo"
                  id="sexo"
                  type="radio"
                  value="MASCULINO"
                 
                />
                <b className="cor_genero">&nbsp;MASCULINO &nbsp;&nbsp;</b>
                
                <input
                  name="sexo"
                  id="sexo"
                  type="radio"
                  value="FEMININO"
                  required
                />
                <b className="cor_genero">&nbsp;FEMININO</b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <span>RUA <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="rua"
                  id="rua"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-3">
              <span>NÚMERO <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="numero"
                  id="numero"
                  type="text"
                  class="form-control"
                  placeholder=""
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <span>E-MAIL <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="email"
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="example@example.com"
                  required
                />
              </div>
            </div>
            <div className="col-3">
              <span>TELEFONE <b>*</b></span>
              <div class="input-group flex-nowrap">
                <input
                  name="telefone"
                  id="telefone"
                  type="email"
                  class="form-control"
                  placeholder="(99) 99999-9999"
                  required
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
                      type="number"
                      class="form-control"
                      placeholder=""
                    />
                    &nbsp; &nbsp;
                    <i class="bi bi-search my-custom-icon"></i>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <span>DESCRIÇÃO <b>*</b></span>
                  <div class="input-group flex-nowrap">
                    <input
                      name="descricao"
                      id="descricao"
                      type="text"
                      class="form-control"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="col-3">
                  <span>DATA ADMISSÃO <b>*</b></span>
                  <div class="input-group flex-nowrap">
                    <input
                      name="data_admissao"
                      id="data_admissao"
                      type="date"
                      class="form-control"
                      placeholder="example@example.com"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row aling-itens-botoes">
          <div className="col-3">
            <button type="submit" class="btn btn-success" onClick={(e) => validarObrigatoriedadeDosCampos()}>
              <i class="bi bi-bag-plus"></i> &nbsp; CADASTRAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-info cor_botao">
              <i class="bi bi-pencil"></i>&nbsp; ATUALIZAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-danger">
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

export default FormFuncionario;
