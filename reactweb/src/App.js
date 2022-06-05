import './App.css';
import { Rotas } from './Rotas';

function App() {
  
  return (
    <><div className="App">

      <header className='App-header'>
        <nav>
          <div className='container'>
            <h1>ETransporter</h1>
            <ul>
              <li>nome_de_usuario</li>
            </ul>
          </div>
        </nav>
      </header>
      <div><p><a href='/cadastro'>Cadastro de Funcionário</a></p></div>
    </div><Rotas /></>
  );
}

export default App;
