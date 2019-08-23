import { globalStore } from "@/store";
import { memoizeOneFormatter, memoizeOneFilterMenuData } from "@/utils/menu";

import { ExRoute } from "@/models/route";

export function updataMenuData(routes: ExRoute[], currentAuthority: string) {
  const originalMenuData = memoizeOneFormatter(routes);
  const menuData = memoizeOneFilterMenuData(originalMenuData, currentAuthority);

  globalStore.update(store => {
    store.menuData = menuData;
  });
}
