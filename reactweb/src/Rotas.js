import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Cadastro from "./pages/cadastro";
import CadastroPg2 from "./pages/cadastroPg2";

export function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/cadastroPg2" element={<CadastroPg2/>}/>
            </Routes>
        </Router>
    );
}