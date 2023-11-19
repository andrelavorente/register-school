import Sidebar from './Componentes/SideBar/Sidebar.jsx';
import Headers from './Componentes/Headers/Headers.jsx';
import FormFuncionario from './Componentes/FormFuncionario/FormFuncionario.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
         <Sidebar></Sidebar>
         <div className='container-fluid'>
            <Headers></Headers>
             <div className='container'>
           <FormFuncionario/>
             </div>
         </div>
    </div>
  );
}

export default App;
