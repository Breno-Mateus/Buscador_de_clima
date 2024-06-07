import { FaSearch } from "react-icons/fa";

import { StyledButton } from "./style.js";

const Button = ({onClick}) => {
    return (
        <StyledButton onClick={onClick}>{<FaSearch />}</StyledButton>
    )
};

export default Button;