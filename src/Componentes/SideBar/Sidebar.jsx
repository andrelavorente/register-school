import './sidebar.css';

function Sidebar() {
    return ( 
        <>
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar" >
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                 <span class="fs-4">Ranazzi</span>
            </a>
            <hr></hr>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
               
                <a href="/Home" class="nav-link active" aria-current="page">  <i class="bi bi-house-door-fill"></i> HOME</a>
            </li>
            <li>
                <a href="/Dashboard" class="nav-link text-white"> <i class="bi bi-file-earmark-richtext"></i> FUNCIONÁRIO</a>
            </li>
            <li>
                <a href="/Orders" class="nav-link text-white"> <i class="bi bi-file-earmark-richtext"></i>  ALUNO</a>
            </li>
            <li>
                <a href="/Produtos" class="nav-link text-white"> <i class="bi bi-file-earmark-richtext"></i>  DISCIPLINA
                </a>
            </li>
           
            </ul>
            <hr></hr>
  
    </div>
            
        </>
      
      
     );
}

export default Sidebar;