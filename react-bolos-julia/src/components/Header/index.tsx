//estilizacao (dar estilo)
import "./style.css";

//rotas
import { Link } from "react-router-dom";

//images
import imgLogo from "../../assets/img/logo1.png";

function Header() {
    return (
        <header>
            <div className="container header_container">
                <div className="linha1">
                    <img src={imgLogo} alt="logo bolos julia" />
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/"}>CadastrarBolo</Link>
                        <Link to={"/"}>ListaBolos</Link>
                    </nav>
                </div>
                <div className="linha2">
                    <p>Seja bem vindo ao bolos Júlia</p>
                </div>
            </div>
        </header>
    );

}

//este componente pode ser chamado en outros lugares pelo export
export default Header;