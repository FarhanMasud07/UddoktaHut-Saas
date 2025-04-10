import Image from "next/image";
import SubmitButton from "../common/SubmitButton";
import { Card, CardContent } from "../ui/card";

export default function ProductItem({ product, ctaColor, ctaHoverColor }) {
  return (
    <Card key={product.id} className="rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md 
                            transition duration-300 pt-0 pb-2">
      <CardContent className="p-0">
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            quality={80}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center rounded-t-2xl"
          />
        </div>
        <div className="p-4">
          <h2 className="text-base font-semibold mb-1 text-neutral-800 line-clamp-1">
            {product.name}
          </h2>
          <p className="text-sm text-neutral-700 font-medium mb-3">
            ${product.price}
          </p>
          <SubmitButton className={`w-full text-sm font-medium hover:bg-[${ctaHoverColor}]
                                        px-3 py-2 rounded-md shadow-sm cursor-pointer ${ctaColor}`}
          >
            <span className="font-semibold text-green-900">  Add to Cart</span>
          </SubmitButton>
        </div>
      </CardContent>
    </Card>
  );
}
