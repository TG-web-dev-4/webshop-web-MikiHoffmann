import { StyledProductList } from "../styles/styledComponents/ProductList.styled";
import CartListItem from "./CartListItem";

const CartItemList = ({ cartItems }) => {
  console.log(cartItems);
  const displayCartItems = () => {
    if (cartItems.length === 0) return <div>Your shopping cart is empty</div>;
    return cartItems.map((cartItem) => {
      return <CartListItem key={cartItem.id} cartItem={cartItem} />;
    });
  };
  return (
    <>
      <div>cart items</div>
      <StyledProductList>{displayCartItems()}</StyledProductList>
    </>
  );
};

export default CartItemList;