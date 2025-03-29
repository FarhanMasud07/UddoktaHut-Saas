"use client";

import { useRouter } from "next/navigation";

function ProductItem({ item }) {
  const router = useRouter();
  return (
    <div key={item.productId}>
      <p
        onClick={() => router.push(`/${item.productId}`)}
        className="mt-6 cursor-pointer"
      >
        {item.productName}
      </p>
    </div>
  );
}

export default ProductItem;
