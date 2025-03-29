import BackButton from "../common/BackButton";


async function Checkout({ productId }) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  return (
    <div className="flex flex-col mt-6 items-center justify-center">
      <h1>Checkout Page for product : {productId}</h1>
      <div className="mt-6">
        <BackButton title="Go Back" />
      </div>
    </div>
  );
}

export default Checkout;
