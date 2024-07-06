import { useParams } from "react-router-dom";

const ProductInfo = (props) => {
  const { product } = props;
  const { id } = useParams();

  const foundProduct = product.find((item) => item.id === parseInt(id));

  console.log(product);
  return (
    <>
      {foundProduct ? (
        <div>
          <h1>{foundProduct.name}</h1>
          <p>{foundProduct.description}</p>
          <p>Price: ${foundProduct.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ProductInfo;
