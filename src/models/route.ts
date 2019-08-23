import { IRoute } from "umi-types";

export enum EAction {
  EPOP = "POP",
  EPUSH = "PUSH",
  EREPLACE = "REPLACE",
}

export interface ExRoute extends IRoute {
  icon?: string;
  name?: string;
  title?: string;
  routes?: ExRoute[];
  authority?: string[];
  hideInMenu?: boolean;
}

export interface ILocation {
  key: string;
  hash: string;
  query: Object;
  state: Object;
  search: string;
  pathname: string;
}
