import { ExRoute } from "./route";

export interface IGlobalStore {
  menuData: ExRoute[];
  authority: string;
}

export let initialStore: IGlobalStore = {
  menuData: null,
  authority: "user",
};
