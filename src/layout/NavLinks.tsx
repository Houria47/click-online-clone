import { useContext } from "react";
import LocaleContext from "@/store/locale-context";
import { NavLinks as Links } from "@/data";

import { Link } from "react-router-dom";

type Props = {
  show: boolean;
};

const NavLinks = ({ show }: Props) => {
  const { t } = useContext(LocaleContext);

  return (
    <ul
      className={`-md:absolute -md:bg-[rgb(113_113_113_/_0.98)] -md:backdrop-blur-3xl -md:mx-auto -md:rounded-xl  duration-300 flex gap-2 md:gap-3 text-white items-center capitalize -md:flex-col -md:left-0 -md:w-full -md:py-2 ${
        show
          ? " -md:opacity-100 -md:top-[calc(var(--nav-h)_+_10px)] "
          : "-md:[visibility:hidden] -md:opacity-0 top-0"
      }`}
    >
      {Links.map((link, idx) => (
        <li key={idx} className="-md:w-full text-center">
          <Link
            className="md:rounded-xl py-2 px-4 duration-300 -md:w-full block hover:bg-foreground/20"
            to={link.href}
          >
            {t(link.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
