import memoizeOne from "memoize-one";
import isEqual from "lodash/isEqual";
import pathToRegexp from "path-to-regexp";

import { ExRoute } from "@/models/route";

import { checkPermissions } from "./auth";
import { urlToList } from "./url";

const formatter = (data: ExRoute[], parentAuthority?: string[]) => {
  if (!data) {
    return null;
  }

  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null;
      }

      const result = {
        ...item,
        children: [],
        authority: item.authority || parentAuthority,
      };

      if (item.routes) {
        const children = formatter(item.routes, item.authority);
        result.children = children;
      }

      delete result.routes;

      return result;
    })
    .filter(item => item);
};

export const memoizeOneFormatter = memoizeOne(formatter, isEqual);

const getSubMenu = (item: ExRoute, currentAuthority: string) => {
  if (
    item.children &&
    !item.hideChildrenInMenu &&
    item.children.some(child => child.name)
  ) {
    return {
      ...item,
      children: filterMenuData(item.children, currentAuthority),
    };
  }

  return item;
};

const filterMenuData = (menuData: ExRoute[], currentAuthority: string) => {
  if (!menuData) {
    return [];
  }

  return menuData
    .filter(item => !item.hideInMenu)
    .map(item =>
      checkPermissions(
        item.authority,
        currentAuthority,
        getSubMenu(item, currentAuthority),
      ),
    )
    .filter(item => item);
};

export const memoizeOneFilterMenuData = memoizeOne(filterMenuData, isEqual);

export const getFlatMenuKeys = (menuData: ExRoute[]) => {
  if (!menuData) {
    return [];
  }

  let keys = [];

  menuData.forEach(item => {
    keys.push(item.path);

    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
  });

  return keys;
};

export const getMenuMatches = (flatMenuKeys: string[], path: string) => {
  return flatMenuKeys.filter(item => {
    if (item) {
      return pathToRegexp(item).test(path);
    }

    return false;
  });
};

export const getDefaultCollapsedSubMenus = (
  flatMenuKeys: string[],
  pathname: string,
) => {
  if (!flatMenuKeys) {
    return [];
  }

  return urlToList(pathname)
    .map(item => getMenuMatches(flatMenuKeys, item)[0])
    .filter(item => item)
    .reduce((acc, curr) => [...acc, curr], ["/"]);
};

export const getSelectedMenuKeys = (
  flatMenuKeys: string[],
  pathname: string,
) => {
  return urlToList(pathname).map(itemPath =>
    getMenuMatches(flatMenuKeys, itemPath).pop(),
  );
};
