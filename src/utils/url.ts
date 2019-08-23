const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string) => {
  return reg.test(path);
};

export const urlToList = (url: string) => {
  const urllist = url.split("/").filter(i => i);

  return urllist.map((_, index) => `/${urllist.slice(0, index + 1).join("/")}`);
};

export const conversionPath = (path: string) => {
  if (path && path.indexOf("http") === 0) {
    return path;
  }
  return `/${path || ""}`.replace(/\/+/g, "/");
};
