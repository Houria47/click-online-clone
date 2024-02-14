import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaMapLocation,
  FaPhone,
  FaTelegram,
} from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

import LocaleContext from "@/store/locale-context";
import logo from "@/assets/logo.png";
import SubscripeForm from "./SubscribeForm";

const Footer = () => {
  const { t } = useContext(LocaleContext);
  return (
    <footer className="bg-foreground">
      <div className="container py-16  text-gray-100 capitalize">
        <div className="flex justify-between -md:flex-col gap-10 md:gap-28  flex-wrap">
          <div className="flex-1 text-center">
            <Link to="/" className="mb-8 block">
              <img src={logo} alt="click online" className="h-16 mx-auto" />
            </Link>
            <span className="text-sm max-w-[150px] mx-auto block">
              {t("company-field")}
            </span>
            <div className="flex gap-8 items-center mt-8 justify-center">
              <a target="_blank" href="https://facebook.com">
                <FaFacebook className="text-lg hover:text-accent duration-300" />
              </a>
              <a target="_blank" href="https://instagram.com">
                <FaInstagram className="text-lg hover:text-accent duration-300" />
              </a>
              <a target="_blank" href="https://google.com">
                <FaGoogle className="text-lg hover:text-accent duration-300" />
              </a>
              <a target="_blank" href="https://telegram.com">
                <FaTelegram className="text-lg hover:text-accent duration-300" />
              </a>
            </div>
          </div>
          <div className="flex-[1.5] flex justify-around gap-10 -md:text-center md:justify-between">
            <div>
              <h2 className="mb-8 md:text-2xl text-accent font-bold capitalize">
                {t("quick-access")}
              </h2>
              <ul className="space-y-3">
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/">{t("home")}</Link>
                </li>
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/#about-us">{t("about-us")}</Link>
                </li>
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/#projects">{t("projects")}</Link>
                </li>
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/#products">{t("products")}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="md:text-2xl text-accent font-bold capitalize mb-8">
                {t("links")}
              </h2>
              <ul className="space-y-3">
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/#contact-us">{t("contact-us")}</Link>
                </li>
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/#blogs">{t("blogs")}</Link>
                </li>
                <li className="hover:-translate-y-px duration-300 hover:text-accent">
                  <Link to="/">{t("privacy-policy")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 -md:text-center">
            <h2 className="md:text-2xl mb-8 text-accent font-bold capitalize">
              {t("newsletter")}
            </h2>
            <p className="text-sm leading-relaxed">
              {t("subscribe-to-newsletter")}
            </p>
            <SubscripeForm />
          </div>
        </div>
        <div className="flex justify-between gap-3 md:gap-20 mt-8 md:mt-14 -md:flex-col flex-wrap">
          <div className="tracking-widest justify-center flex-1 text-sm flex items-center gap-3">
            <FaEnvelope className="text-accent text-md" /> someemali@gmail.com
          </div>
          <div className="tracking-widest justify-center flex-[2] text-sm flex items-center gap-3">
            <FaPhone className="text-accent text-md" /> 395 944 566 (963)+
          </div>
          <div className="tracking-widest justify-center flex-1 text-sm flex items-center gap-3">
            <FaMapLocation className="text-accent text-md" /> {t("location")}
          </div>
        </div>
        <div className="border-t border-[#302d2d] mt-4 pt-4 md:pt-5 md:mt-8 flex justify-center md:justify-between gap-2 md:gap-6  flex-wrap">
          <div className="text-sm">
            {t("rights-reserved")} © 2024
            <Link className="text-accent ms-1" to="/">
              Click Online
            </Link>
          </div>
          <div className="text-sm">
            {t("developed-by")}
            <a
              target="_blank"
              className="text-accent ms-1 inline-flex items-center gap-1"
              href="https://github.com/Houria47"
            >
              Houria Alyaseen <FaGithub /> <HiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
