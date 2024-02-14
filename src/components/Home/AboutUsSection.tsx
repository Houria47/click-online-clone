import { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

import LocaleContext from "@/store/locale-context";
import SectionTitle from "../ui/SectionTitle";
import { Namespaces } from "@/locale/types";

import img1 from "@/assets/aboutus-1.jpg";
import img2 from "@/assets/aboutus-2.jpg";

const AboutUsSection = () => {
  const { t } = useContext(LocaleContext);
  return (
    <section id="about-us" className="flex container gap-10 py-20 flex-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "200px", amount: "all" }}
        transition={{ duration: 0.5, type: "tween", ease: "linear" }}
        className="flex items-center min-w-80 mx-auto"
      >
        <img src={img2} alt="" className="h-72 md:h-96" />
        <img
          src={img1}
          alt=""
          className="h-64 md:h-80 -ms-10 border-white border-8 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "200px", amount: "all" }}
        transition={{ duration: 0.5, type: "tween", ease: "linear" }}
      >
        <SectionTitle
          title={t("about-us-section-title-2", Namespaces.home)}
          subTitle={t("about-us-section-title-1", Namespaces.home)}
        />
        <p className="max-w-[500px] mt-8 leading-relaxed mb-5 -md:text-center">
          {t("about-us-section-p", Namespaces.home)}
        </p>
        <hr />
        <ul className="space-y-4 mt-5">
          <li className="flex items-center gap-2 -md:justify-center">
            <BiCheck className="text-accent font-bold text-lg" />
            {t("about-us-item-1", Namespaces.home)}
          </li>
          <li className="flex items-center gap-2 -md:justify-center">
            <BiCheck className="text-accent font-bold text-lg" />
            {t("about-us-item-2", Namespaces.home)}
          </li>
          <li className="flex items-center gap-2 -md:justify-center">
            <BiCheck className="text-accent font-bold text-lg" />
            {t("about-us-item-3", Namespaces.home)}
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
