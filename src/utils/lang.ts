import { formatMessage } from "umi-plugin-react/locale";
import ILang from "@/models/lang";

export default (item: keyof ILang | string) => {
  return formatMessage({ id: item });
};
