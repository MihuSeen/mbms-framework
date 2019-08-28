import { formatMessage, MessageValue } from "umi-plugin-react/locale";
import ILang from "@/models/lang";

export function lang(
  id: keyof ILang,
  options?: { [key: string]: MessageValue },
) {
  return formatMessage({ id }, { ...options });
}
