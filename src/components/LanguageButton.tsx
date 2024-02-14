import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import LocaleContext from "@/store/locale-context";
import { SupportedLanguages } from "@/config";

const LanguageButton = () => {
  const { currentLanguage, changeLanguage } = useContext(LocaleContext);

  if (currentLanguage === SupportedLanguages.ar) {
    return (
      <>
        <Link
          to="/"
          className="-md:hidden text-sm btn main-shadow hover:shadow-none bg-accent text-white flex items-center gap-2"
        >
          <FaArrowRightLong />
          ابق على تواصل
        </Link>
        <button
          onClick={changeLanguage.bind(null, SupportedLanguages.en)}
          className="btn main-shadow hover:shadow-none bg-accent text-white text-sm"
        >
          EN
        </button>
      </>
    );
  }

  return (
    <button
      onClick={changeLanguage.bind(null, SupportedLanguages.ar)}
      className="btn main-shadow hover:shadow-none bg-accent text-white text-sm"
    >
      العربية
    </button>
  );
};

export default LanguageButton;
