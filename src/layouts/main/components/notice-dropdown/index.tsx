import React from "react";
import { Icon, Menu, Badge } from "antd";

import { getLocale, setLocale } from "umi-plugin-react/locale";

import HeaderDropdown from "../header-dropdown";

import Style from "./style";

const { Item } = Menu;

enum ELanguageIcons {
  "zh-CN" = "🇨🇳",
  "en-US" = "🇺🇸",
}

enum ELanguageLabels {
  "zh-CN" = "简体中文",
  "en-US" = "English",
}

const NoticeDropdown: React.FC = () => {
  const locales = ["zh-CN", "en-US"];

  const selectedLang = getLocale();

  const changeLang = (options: { key: string }) => {
    setLocale(options.key);
  };

  const langMenu = (
    <Menu onClick={changeLang} selectedKeys={[selectedLang]}>
      {locales.map(locale => (
        <Item key={locale}>
          <span>{ELanguageIcons[locale]}</span> {ELanguageLabels[locale]}
        </Item>
      ))}
    </Menu>
  );

  return (
    <HeaderDropdown overlay={langMenu}>
      <Badge className={Style.badge} dot={true}>
        <Icon type="bell" />
      </Badge>
    </HeaderDropdown>
  );
};

export default NoticeDropdown;
