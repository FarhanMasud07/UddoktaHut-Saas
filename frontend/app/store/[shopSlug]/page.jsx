
import { getAuthenticStore } from "@/lib/actions/auth.action";
import UnauthorizeAccess from "@/components/common/UnauthorizeAccess";
import ProductList from "@/components/shopui/ProductList";


async function UserShopPage({ params }) {
  const { shopSlug } = await params;

  const { storeData } = await getAuthenticStore({ storeName: shopSlug });

  if (!storeData) return <UnauthorizeAccess shopSlug={shopSlug} />;

  const { id, store_name, store_type, store_address, isActive } = storeData;

  if (!isActive) return <UnauthorizeAccess shopSlug={shopSlug} />;

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to {store_name}s Shop</h1>
      <p>Enjoy shopping at {shopSlug}.uddoktahut.com</p>
      <p>Shop Id: {id}</p>
      <p>Shop Type: {store_type}</p>
      <p>Shop Address: {store_address}</p>

      <ProductList shopSlug={shopSlug} />
    </div>
  );
}

export default UserShopPage;
