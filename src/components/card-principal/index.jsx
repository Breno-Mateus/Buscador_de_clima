import { DivPrincipal, Imagem } from "./style.js";

const CardPrincipal = ({img, graus, condicoes}) => {

    return (
        <DivPrincipal>
            <Imagem src={`http://openweathermap.org/img/wn/${img}.png`} alt="figura ilustrativa da condição climatica" />
            <div>
                <h2>{graus} c°</h2>
                <p>{condicoes}</p>
            </div>
        </DivPrincipal>
    )
};

export default CardPrincipal;