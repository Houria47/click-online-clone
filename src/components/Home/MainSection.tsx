import mainBg1 from "@/assets/main-section-1.png";
import { Namespaces } from "@/locale/types";
import LocaleContext from "@/store/locale-context";
import { useContext } from "react";
import { FaApple } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Typewriter from "@/components/ui/Typewriter";

const MainSection = () => {
  const { t } = useContext(LocaleContext);
  return (
    <section className="main-section-bg bg-no-repeat bg-cover flex items-center justify-center h-svh">
      <div className="container flex -md:text-center gap-32 justify-between md:pt-40">
        <img src={mainBg1} alt="" className="h-96 -md:hidden animate-upDown" />
        <div className="text-white flex-1">
          <h1 className="text-4xl min-h-20">
            <Typewriter text={t("main-section-title", Namespaces.home)} />
          </h1>
          <p className=" mt-10 leading-relaxed">
            {t("main-section-p", Namespaces.home)}
          </p>
          <div className="flex items-center gap-4 mt-10 -md:justify-center">
            <a
              target="_blank"
              className="gap-4 flex items-center btn bg-accent border"
              href="https://appstore.com"
            >
              {t("app-store")}
              <FaApple />
            </a>
            <a
              target="_blank"
              className="gap-4 flex items-center btn bg-white text-accent border border-accent"
              href="https://googleplay.com"
            >
              {t("google-play")}
              <IoLogoGooglePlaystore />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
