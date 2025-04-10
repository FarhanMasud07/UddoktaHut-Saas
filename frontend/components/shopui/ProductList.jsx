import NoDataFound from "../common/NoDataFound";
import ProductItem from "./ProductItem";

export default function ProductList({
  products,
  ctaColor = "bg-green-400",
  ctaHoverColor = "#05f27c", }) {

  if (!products || !products.length) return <NoDataFound title="No products found" />;

  return (
    <main className="flex-1 overflow-y-auto p-6 bg-neutral-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <ProductItem
            key={product + i}
            product={product}
            ctaColor={ctaColor}
            ctaHoverColor={ctaHoverColor}
          />
        ))}
      </div>
    </main>
  );
}
