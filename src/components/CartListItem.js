import { StyledCartListItem } from "../styles/styledComponents/CartListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";

const CartListItem = ({cartItem}) => {
    return (
        <StyledCartListItem>
            <span>{cartItem.name}</span>
            <img src={`../images/productImg/${cartItem.img}`} alt="blanco" />
            <StyledLinkButton className="decreaseButton">-</StyledLinkButton>
            <StyledLinkButton className="increaseButton">+</StyledLinkButton>
            <StyledLinkButton className="deleteButton">del</StyledLinkButton>
        </StyledCartListItem>
    )
}

export default CartListItem