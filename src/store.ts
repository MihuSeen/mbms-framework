import { createStore } from "@jimengio/rex";

import { initialStore, IGlobalStore } from "@/models/global";

export const globalStore = createStore<IGlobalStore>(initialStore);
