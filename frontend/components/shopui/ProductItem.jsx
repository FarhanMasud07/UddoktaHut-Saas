
"use client";

import Link from "next/link";

function ProductItem({ item }) {
  return (
    <div key={item.productId}>
      <Link href={`/${item.productId}`}>{item.productName}</Link>
    </div>
  );
}

export default ProductItem;

