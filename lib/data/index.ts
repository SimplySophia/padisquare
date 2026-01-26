import { vendors } from "./vendors";
import { products } from "./products";
import { Product } from "@/types/product";
import { Vendor } from "@/types/vendor";

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getVendorBySlug(slug: string): Promise<Vendor | null> {
  await delay(300);
  return vendors.find(v => v.slug === slug) || null;
}

export async function getProductsByVendor(
  vendorSlug: string
): Promise<Product[]> {
  await delay(500);
  return products.filter(p => p.vendorSlug === vendorSlug);
}
