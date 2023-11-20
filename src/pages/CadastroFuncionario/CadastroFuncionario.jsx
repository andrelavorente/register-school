import "./CadastroFuncionario.css";

function validarObrigatoriedadeDosCampos(){
    
  let erros = "";
  var radios = document.getElementsByName('sexo');

   if(document.getElementById("nome").value === ""){
      erros += "O NOME DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }

   if(document.getElementById("rg").value === ""){
    erros += "O RG DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   
   if(document.getElementById("cpf").value === ""){
        erros += "O CPF DO FUNCIONÁRIO É OBRIGATÓRIO \n";
   }
   if(!validarCPF()){
    erros += "O CPF DO FUNCIONÁRIO NÃO É VÁLIDO \n";
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

   /** Validação de radiobox */
   var selecionado = false;
   for (var i = 0; i < radios.length; i++) {
       if (radios[i].checked) {
           selecionado = true;
           break;
       }
   }

   if(!selecionado){
    erros += "O SEXO É OBRIGATÓRIO \n";
   }


   if(erros.length > 0){
     alert(erros);
   }
   else{
      alert("NOVO FUNCIONÁRIO REGISTRADO COM SUCESSO!!!")
   }
}

function validarCPF() {
  // Obter o valor do campo de CPF
  var cpf = document.getElementById('cpf').value;

  // Remover caracteres não numéricos
  cpf = cpf.replace(/\D/g, '');

  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
      alert('CPF inválido. O CPF deve ter 11 dígitos.');
      return;
  }

  // Verificar se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpf)) {
      alert('CPF inválido. Todos os dígitos são iguais.');
      return;
  }
  var i=0;
  // Calcular os dígitos verificadores
  var soma = 0;
  for ( i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  var resto = soma % 11;
  var digito1 = resto < 2 ? 0 : 11 - resto;

  soma = 0;
  for ( i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  var digito2 = resto < 2 ? 0 : 11 - resto;

  // Verificar se os dígitos verificadores estão corretos
  if (parseInt(cpf.charAt(9)) !== digito1 || parseInt(cpf.charAt(10)) !== digito2) {
      alert('CPF inválido. Dígitos verificadores não conferem.');
      return;
  }

  // Se chegou até aqui, o CPF é válido
  return true;
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
          <div className="col-6">
              <span>CIDADE <b>*</b></span>
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
              <span>ESTADO <b>*</b></span>
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
            <div className="col-3">
              <span>CEP</span>
              <div class="input-group flex-nowrap">
                <input
                  name="cep"
                  id="cep"
                  type="number"
                  class="form-control"
                  placeholder="99999-000"
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
                  type="number"
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
            <button type="button" class="btn btn-info cor_botao" onClick={(e) => validarObrigatoriedadeDosCampos()}>
              <i class="bi bi-pencil"></i>&nbsp; ATUALIZAR
            </button>
          </div>
          <div className="col-3">
            <button type="button" class="btn btn-danger" onClick={(e) => validarObrigatoriedadeDosCampos()}>
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
