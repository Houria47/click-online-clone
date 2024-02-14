import { useContext, useRef } from "react";
import { useInView } from "framer-motion";

import CountAnimation from "../ui/CountAnimation";
import SectionTitle from "@/components/ui/SectionTitle";
import LocaleContext from "@/store/locale-context";

import { Namespaces } from "@/locale/types";

const numbers = [
  { title: "expert-consulting", number: 400 },
  { title: "happy-customes", number: 850 },
  { title: "complete-cases", number: 620 },
  { title: "consulting-solution", number: 120 },
];

let isEntered = false;

const NumbersSection = () => {
  const { t } = useContext(LocaleContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "200px" });
  if (isInView) isEntered = true;

  return (
    <section className="py-20 container">
      <SectionTitle
        title={t("numbers-section-title", Namespaces.home)}
        subTitle={t("numbers-section-subtitle", Namespaces.home)}
      />
      <ul
        ref={ref}
        className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-14"
      >
        {numbers.map(({ number, title }, idx) => (
          <NumberItem
            entered={isEntered}
            key={idx}
            number={number}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
};

export default NumbersSection;

type NumberProps = {
  title: string;
  number: number;
  entered: boolean;
};

const NumberItem = ({ title, number, entered }: NumberProps) => {
  return (
    <li className="-md:border-b md:border-e border-gray-300 last:border-none p-10 text-center">
      <div className="relative text-foreground font-bold flex items-start justify-center gap-1">
        <span className="text-accent">+</span>
        <span className="text-4xl">
          {!entered && <>0</>}
          {entered && <CountAnimation number={number} />}
        </span>
      </div>
      <h2 className="text-gray-500 text-sm mt-3">{title}</h2>
    </li>
  );
};
