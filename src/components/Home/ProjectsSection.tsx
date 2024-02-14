import { useContext } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

import LocaleContext from "@/store/locale-context";
import SectionTitle from "../ui/SectionTitle";

import { Namespaces } from "@/locale/types";
import { getProjects } from "@/data/projects";

const ProjectsSection = () => {
  const { t } = useContext(LocaleContext);
  const projects = getProjects();
  return (
    <section id="projects" className="bg-foreground">
      <div className="container text-center py-16">
        <SectionTitle
          light
          title={t("projects-section-title-2", Namespaces.home)}
          subTitle={t("projects-section-title-1", Namespaces.home)}
        />
        <ul className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10">
          {projects.map((p, idx) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "200px", amount: "all" }}
              transition={{ duration: 0.5, type: "tween", ease: "linear" }}
              key={idx}
              className="overflow-hidden flex flex-col rounded-md bg-white"
            >
              <div className="flex-1">
                <img
                  className="w-full h-full object-cover "
                  src={p.img}
                  alt=""
                />
              </div>
              <h2 className="p-4 font-bold">{p.title}</h2>
            </motion.li>
          ))}
        </ul>
        <button className="btn bg-accent text-white flex items-center gap-4 mt-10 mx-auto main-shadow">
          {t("theprojects")}
          <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
