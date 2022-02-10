import { StyledProductList } from "../styles/styledComponents/ProductList.styled";
import ProductListItem from "./ProductListItem";

const ProductList = ({ products }) => {
  //console.log(allProducts)
  const renderProductList = () => {
    return products.map((product) => (
      <ProductListItem key={product.id} product={product} />
    ));
  };
  return <StyledProductList>{renderProductList()}</StyledProductList>;
};

export default ProductList;
