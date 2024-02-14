import { useContext } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ImQuestion } from "react-icons/im";

import SectionTitle from "@/components/ui/SectionTitle";
import FadeInListItem from "@/components/ui/FadeInListItem";
import LocaleContext from "@/store/locale-context";

import { Namespaces } from "@/locale/types";
import { getValues } from "@/data/values";

const ValuesSection = () => {
  const { t } = useContext(LocaleContext);
  const values = getValues();
  return (
    <section id="contact-us" className="second-bg py-20 bg-no-repeat bg-cover">
      <SectionTitle
        light
        className="text-center"
        title={t("values-section-title", Namespaces.home)}
        subTitle={t("values-section-subtitle", Namespaces.home)}
      />
      <div className="container pt-16">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {values.map((value, idx) => (
            <FadeInListItem
              className={`${
                idx === 1 ? "bg-foreground" : "bg-white"
              } rounded-md p-8 text-center`}
              key={idx}
            >
              <value.svg className="text-accent text-[4rem] mx-auto" />
              <h2 className="my-3 text-accent text-lg">
                {t(value.title, Namespaces.home)}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(value.description, Namespaces.home)}
              </p>
            </FadeInListItem>
          ))}
        </ul>
        <div className="mt-16 flex gap-8 md:gap-5 flex-wrap -md:flex-col">
          <p className="leading-relaxed flex items-center text-sm text-white flex-[3.5] gap-6 -md:text-center -md:flex-col">
            <IoMdCheckmarkCircleOutline className="text-[5rem]" />
            {t("values-section-text", Namespaces.home)}
          </p>
          <button className="btn bg-accent flex text-white items-center gap-4 -md:w-fit -md:mx-auto flex-[1]">
            <ImQuestion className="text-4xl" />
            <div>
              <span>395 944 566 +</span>
              <p>{t("values-section-button-text", Namespaces.home)}</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
