import NoDataFound from "../common/NoDataFound";
import ProductItem from "./ProductItem";

const validProductsFromShop = [
  {
    name: "shoporia",
    data: [
      {
        productId: 1,
        productName: "Elegant Baby Soap",
      },
      {
        productId: 2,
        productName: "Baby Diper",
      },
      {
        productId: 3,
        productName: "Chocolaes Caramel",
      },
      {
        productId: 4,
        productName: "Shampoo",
      },
    ],
  },
  {
    name: "funnymg",
    data: [
      {
        productId: 1,
        productName: "Halkhata",
      },
      {
        productId: 2,
        productName: "Mojar Boi",
      },
      {
        productId: 3,
        productName: "Horek Rokomer Kobita",
      },
      {
        productId: 4,
        productName: "Kanna Vora Jol",
      },
    ],
  },
];

function ProductList({ shopSlug }) {
  const shop = validProductsFromShop.find((item) => item.name === shopSlug);

  if (!shop) return <NoDataFound title="No products found" />;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      {shop.data.length ? (
        shop.data.map((item) => (
          <ProductItem key={item.productId} item={item} />
        ))
      ) : (
        <NoDataFound title="No products found" />
      )}
    </div>
  );
}

export default ProductList;
