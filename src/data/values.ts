import { IconType } from "react-icons";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";
import { FaUsersRays } from "react-icons/fa6";
import { PiHandshakeFill } from "react-icons/pi";

export type Value = {
  title: string;
  description: string;
  svg: IconType;
};

export function getValues(): Value[] {
  const values = [
    {
      title: "value-1-title",
      description: "value-1-desc",
      svg: AiOutlineCloudServer,
    },
    {
      title: "value-2-title",
      description: "value-2-desc",
      svg: GoShieldCheck,
    },
    {
      title: "value-3-title",
      description: "value-3-desc",
      svg: FaUsersRays,
    },
    {
      title: "value-4-title",
      description: "value-4-desc",
      svg: PiHandshakeFill,
    },
  ];

  return values;
}
