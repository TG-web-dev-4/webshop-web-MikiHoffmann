import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeDark } from "../styles/Themes";
import { StyledProductListItem } from "../styles/styledComponents/ProductListItem.styled";
import { StyledLinkButton } from "../styles/styledComponents/LinkButton.styled";
import { addToCart } from "../state/actions/shopActions";

const ProductListItem = ({ product, addToCart }) => {
  return (
    <StyledProductListItem>
      <span className="itemTitle">
        <h4>{product.name}</h4>
      </span>
      <div className="itemImgContainer">
        <img
          className="itemImg"
          src={`../images/productImg/${product.img}`}
          alt={product.name}
        />
      </div>
      <span className="itemPrice">{product.price} money</span>
      <ThemeProvider theme={themeDark}>
        <StyledLinkButton className="detailsButton">
          view details
        </StyledLinkButton>
        <StyledLinkButton
          className="addButton"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          add to my shoppingcart
        </StyledLinkButton>
      </ThemeProvider>
    </StyledProductListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductListItem);
