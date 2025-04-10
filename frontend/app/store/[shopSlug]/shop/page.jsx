import ProductList from "@/components/shopui/ProductList";
import Shop from "@/components/shopui/Shop";
import deliverySystem from "@/public/assets/images/onboarding-img.png";

export default function Store() {
    const products = new Array(8).fill(null).map((_, i) => ({
        id: i,
        name: `Product ${i + 1}`,
        price: (i + 1) * 10,
        image: deliverySystem,
    }));
    return (
        <Shop>
            <ProductList products={products} />
        </Shop>
    )
}



