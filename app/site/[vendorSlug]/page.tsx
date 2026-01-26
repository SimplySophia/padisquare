import Image from "next/image";
import { getVendorBySlug, getProductsByVendor } from "@/lib/data";

export default async function Home() {
  const vendor = await getVendorBySlug("techmart");
  const products = await getProductsByVendor("techmart");

  if (!vendor) {
    return <div className="p-4">Vendor not found</div>;
  }

  return (
    <div className="p-4 space-y-6">
      {/* Vendor Info */}
      <div className="flex items-center gap-4">
        <Image
          src={vendor.logo}
          alt={vendor.name}
          width={64}
          height={64}
          className="rounded"
        />
        <div>
          <h1 className="text-3xl font-bold">{vendor.name}</h1>
          <p className="text-gray-600">{vendor.description}</p>
        </div>
      </div>

      {/* Products */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="border rounded p-3 space-y-2"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={160}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-brand font-semibold">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
