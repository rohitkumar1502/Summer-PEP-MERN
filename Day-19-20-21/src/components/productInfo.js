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
          <div  className="card">
          <img src={foundProduct.thumbnail} />

          <div className="">
            <div className="title">{foundProduct.title}</div>
            <p className="">{foundProduct.description}</p>
            <div class="rating">
              <span>Rating: </span>
              <span>({foundProduct.rating})</span>
            </div>
            <div className="price">$ {foundProduct.price}</div>
            <div className="original-price">M.R.P.: {foundProduct.price + 10}</div>
            <div className="discount">(50% off)</div>
            <div className="delivery">FREE delivery Sun, 7 Jul</div>
            <div className="prime">
              <span>prime</span>
            </div>
            <div  className="add-to-cart" >Buy now</div>
            {/* <div className="add-to-cart">Add to cart</div> */}
            <div className="more-buying-choices">
              More Buying Choices
              <a href="#"> ${foundProduct.price} (5 new offers)</a>
            </div>
          </div>
        </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

export default ProductInfo;
