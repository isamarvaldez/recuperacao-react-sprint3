//estilização
import "./style.css";

//componentes
import cardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";



function ListarBolo() {
    //react
    //bolos=> e para ver o valor
    //setBolos=> e para atribuir o valor

    //useState<any[]> => e o tipo do valor que pode receber
    //([]) => e o valor inicial

    const [bolos, setBolos] = useState<any[]>([]);

    function listarBolos() {

        api.get("bolos")
            .then((response) => {    //then e quando api da um retorno positivo

                setBolos(response.data); //atualiza o valor da variavel bolos
                //pelo retorno da api
                console.log(response.data)

            })
            .catch((error) => {
                //catch e quando api da retorno negativo
                console.log(error);
            });

    }
    useEffect(() => {
        listarBolos();
    }, []);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListarBolo;