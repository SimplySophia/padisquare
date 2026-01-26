import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVendorBySlug, getProductsByVendor } from '@/lib/data';
import VendorStorefront from '@/app/components/vendor/VendorStorefront';
interface PageProps {
  params: { vendorSlug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const vendor = await getVendorBySlug(params.vendorSlug);
  
  if (!vendor) {
    return {
      title: 'Vendor Not Found',
    };
  }

  return {
    title: `${vendor.name} | Padisquare`,
    description: vendor.description,
    openGraph: {
      title: vendor.name,
      description: vendor.description,
      images: [vendor.heroImage],
    },
  };
}

export default async function VendorPage({ params }: PageProps) {
  const vendor = await getVendorBySlug(params.vendorSlug);

  if (!vendor) {
    notFound();
  }

  const products = await getProductsByVendor(params.vendorSlug);

  return <VendorStorefront vendor={vendor} products={products} />;
}