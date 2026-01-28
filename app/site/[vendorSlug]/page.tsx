import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getVendorBySlug, getProductsByVendor } from '@/lib/data';
import VendorStorefront from '../../components/vendor/VendorStorefront';

interface PageProps {
  params: Promise<{ vendorSlug: string }>; 
}

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { vendorSlug } = await params;
  const vendor = await getVendorBySlug(vendorSlug);
  
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
  const { vendorSlug } = await params;
  const vendor = await getVendorBySlug(vendorSlug);

  if (!vendor) {
    notFound();
  }

  const products = await getProductsByVendor(vendorSlug);

  return <VendorStorefront vendor={vendor} products={products} />;
}