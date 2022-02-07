import ProductListitem from "./ProductListitem";

const ProductList = ({ allProducts }) => {
  //console.log(allProducts)
  const renderProductList = () => {
    return allProducts.map((product) => (
      <ProductListitem key={product.prId} product={product} />
    ));
  };
  return <ul>{renderProductList()}</ul>;
};

export default ProductList;
