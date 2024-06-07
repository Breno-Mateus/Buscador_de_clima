import { DivInfo } from "./style.js";

const CardInfo = ({icone, info, temp, unidade}) => {
    return (
        <DivInfo>
            {icone}

            <div>
                <h4>{info}</h4>
                <p>{temp} {unidade}</p>
            </div>
        </DivInfo>
    )
};

export default CardInfo;