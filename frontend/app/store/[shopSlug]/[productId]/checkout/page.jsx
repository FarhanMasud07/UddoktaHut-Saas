
import Loader from "@/components/common/Loader";
import Checkout from "@/components/shopui/Checkout";
import { Suspense } from "react";

async function CheckoutPage({ params }) {
  const { productId } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <Checkout productId={productId} />
    </Suspense>
  );
}

export default CheckoutPage;
