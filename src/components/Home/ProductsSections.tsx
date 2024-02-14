import { useContext } from "react";

import SectionTitle from "@/components/ui/SectionTitle";
import FadeInListItem from "@/components/ui/FadeInListItem";
import LocaleContext from "@/store/locale-context";

import { getProducts } from "@/data/products";
import { Namespaces } from "@/locale/types";

const ProductsSection = () => {
  const { t } = useContext(LocaleContext);
  const products = getProducts();
  return (
    <section id="products" className="my-20 container">
      <SectionTitle
        title={t("products-section-title", Namespaces.home)}
        subTitle={t("products-section-subtitle", Namespaces.home)}
      />
      <ul className="mx-auto grid my-14 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
        {products.map((product, idx) => (
          <FadeInListItem
            key={idx}
            className="text-center flex flex-col items-center"
          >
            <div className="flex-1">
              <img src={product.img} alt="w-full h-full object-cover" />
            </div>
            <h2 className="my-3">{product.name}</h2>
            <span className="text-accent text-sm">
              {product.price} {t("price-unit")}
            </span>
          </FadeInListItem>
        ))}
      </ul>
    </section>
  );
};

export default ProductsSection;
