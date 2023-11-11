import "./style.css";

 //o componente pai passsa valores para  o props componente filho
function CardBolo(props: any) {
    return (
        <div id="card">
            <div>
                <img
                    src={"http://localhost:3000/static/" + props.imagem}
                    alt={"Foto de um " + props.nome}
                />
            </div>
            <div className="card_bolo_texto">
                <h2>{props.nome}</h2>


                <div>
                    <span>Ingredientes: </span>
                    <p>Bolo:{props.ingredientes}</p>
                    <p>Cobertura: {props.cobertura}</p>
                </div>
                <span>R$</span>
            </div>
        </div>
    );
};

export default CardBolo;