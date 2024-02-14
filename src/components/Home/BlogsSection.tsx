import { useContext } from "react";
import { Link } from "react-router-dom";

import SectionTitle from "@/components/ui/SectionTitle";
import FadeInListItem from "@/components/ui/FadeInListItem";
import LocaleContext from "@/store/locale-context";

import { Namespaces } from "@/locale/types";
import { SupportedLanguages } from "@/config";
import { getBlogs } from "@/data/blogs";

const BlogsSection = () => {
  const blogs = getBlogs();
  const { t, currentLanguage } = useContext(LocaleContext);

  const local = currentLanguage === SupportedLanguages.ar ? "ar-EG" : "en";
  return (
    <section id="blogs" className="mt-10 mb-32">
      <SectionTitle
        title={t("blogs-section-title", Namespaces.home)}
        subTitle={t("blogs-section-subtitle", Namespaces.home)}
      />
      <div className="container">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-14">
          {blogs.map((blog, idx) => (
            <FadeInListItem
              key={idx}
              className="bg-white shadow-xl rounded-md overflow-hidden  text-center"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 pt-4">
                <h2 className="capitalize font-bold text-lg">
                  {t(blog.title, Namespaces.home)}
                </h2>
                <p className="text-sm text-gray-500 mt-3">
                  {t(blog.description, Namespaces.home)}
                </p>
                <Link
                  className="uppercase text-sm text-accent mt-5 mb-1 block"
                  to="./"
                >
                  {t("read-more")}
                </Link>
              </div>
              <div className="border-t p-2 border-gray-300 text-sm text-gray-500">
                {blog.date.toLocaleDateString(local, {
                  dateStyle: "long",
                })}
                <span className="mx-2">.</span>
                {blog.date.toLocaleTimeString(local, {
                  timeStyle: "short",
                })}
              </div>
            </FadeInListItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogsSection;
