import { StyledInput } from "./style.js";


const Input = ({value, onChange, placeholder}) => {
    return (
        <StyledInput type="search" value={value} onChange={onChange} placeholder={placeholder} name="nome_cidade"  />
    )
};

export default Input;