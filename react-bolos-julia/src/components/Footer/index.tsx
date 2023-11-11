import "./style.css"

import { Link } from "react-router-dom";


import imgw from "../../assets/img/whats1.png";
import imgf from "../../assets/img/face1.png";
import imgi from "../../assets/img/instag1.png";


function Footer() {
    return (
        <footer>
            <div className="container footer_container">
                <p>Todos os direitos reservados ®</p>
                <div>
                    <Link to="#"><img src={imgw} alt=""/></Link>
                    <Link to="#"><img src={imgf} alt=""/></Link>
                    <Link to="#"><img src={imgi} alt=""/></Link>
        </div>
        </div >
        </footer >
    )

}
export default Footer







