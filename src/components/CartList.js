import { useSelector } from "react-redux";

import CartListItem from "./CartListItem";

const CartItemList = () => {
  const cartItems = useSelector((state) => state.shop.cartItems);
  console.log("cartItems", cartItems);
  const displayCartItems = () => {
    if (cartItems.length === 0) return <div>Your shopping cart is empty</div>;
    return cartItems.map((cartItem) => {
      return <CartListItem key={cartItem.id} cartItem={cartItem} />;
    });
  };
  return (
    <>
      <div>cart items</div>
      {displayCartItems()}
    </>
  );
};

export default CartItemList;
