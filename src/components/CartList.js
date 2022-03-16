import CartListItem from "./CartListItem";

const CartItemList = ({cartItems}) => {
  
  const displayCartItems = () => {
    if (cartItems.length === 0) return <div>Your shopping cart is empty</div>;
    return cartItems.map((cartItem) => {
      return <CartListItem key={cartItem.id} cartItem={cartItem} />;
    });
  };
  
  
  const cartItemTotal = () => {
    let itemTotal;
    let cartTotal;
    for(let i = 0; i < cartItems.length; i++) {
      itemTotal = (cartItems[i].qty * cartItems[i].price);
      cartTotal += itemTotal[i];
    }
    if (cartItems.length === 0) return <p>empty</p>;
    return cartTotal;
    
  };

  return (
    <>
      <div>cart items</div>
      {cartItemTotal()}
      {displayCartItems()}
    </>
  );
};

export default CartItemList;
