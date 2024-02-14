import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";

export type Product = {
  name: string;
  img: string;
  price: number;
};

export function getProducts(): Product[] {
  const products = [
    { name: "product 1", img: product1, price: 50 },
    { name: "product 2", img: product2, price: 50 },
    { name: "product 3", img: product3, price: 50 },
  ];
  return products;
}
