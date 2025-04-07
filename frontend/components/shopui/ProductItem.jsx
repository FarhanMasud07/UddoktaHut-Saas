import NextButton from "../common/NextButton";

function ProductItem({ item }) {
  return (
    <div key={item.productId}>
      <NextButton
        title={item.productName}
        destination={item.productId}
      />
    </div>
  );
}

export default ProductItem;

