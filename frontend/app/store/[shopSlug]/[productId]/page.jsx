
import Loader from "@/components/common/Loader";
import ProductDetails from "@/components/shopui/ProductDetails";
import { Suspense } from "react";
async function ProductPage({ params }) {
  const { productId } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <ProductDetails productId={productId} />
    </Suspense>
  );
}

export default ProductPage;
